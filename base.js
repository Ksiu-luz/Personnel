"use strict";
const pg = require("pg");


let ssh = '';
let conStr = '';

const config = {
    connectionString:
        conStr,
    ssl: {
        rejectUnauthorized: true,
        ca: ssh,
    },
};

const conn = new pg.Client(config);

conn.connect((err) => {
    if (err) throw err;
});

const getUsers = async () => {
    const students = await conn.query(`SELECT * FROM students`);
    return await packData(students.rows);
}

const packData = async (data) =>{
    let packedData = [];
    for (const student of data) {
        const student_skills = await getStudentSkills(student.student_id);
        const student_group = await getGroupByGroupId(student.group_id);
        const statusImage = await getStatusImageByStatus(student.student_status);
        const studentProjects = await getProjectsByStudentId(student.student_id);

        let packedStudent = {
            userName : student.student_name,
            tg : student.telegram_contact,
            github: student.github,
            grp : student_group,
            skills : student_skills,
            personalInfo : student.about_me_info_short,
            statusImageSrc : statusImage,
            statusAltText : student.student_status,
            work_experience : student.experience_info,
            projects : studentProjects
        };
        packedData.push(packedStudent);
    }

    return packedData;
}

const findStudentsByName = async (student_name) => {
    return await conn.query(`SELECT * FROM students WHERE student_name = '${student_name}'`);
}

const getStatusImageByStatus = (student_status) => {
    if (student_status === 'Готов вступить в команду') {
        return 'images/status/status1.svg';
    }
    if (student_status === 'В команде') {
        return 'images/status/status3.svg'
    }
    return 'images/status/status2.svg'
}

const getProjectIdsAndRolesByStudentId = async (student_id) => {
    return await conn.query(`SELECT project_id, student_role FROM student_projects WHERE student_id = '${student_id}'`);
}

const getProjectsByStudentId = async (student_id) => {
    const projectIdsAndRoles = await getProjectIdsAndRolesByStudentId(student_id);
    let studentProjects = [];
    for (const projectIdAndRole of projectIdsAndRoles.rows) {
        const projectNameAndInfo = (await conn.query(`SELECT project_name, project_info FROM projects WHERE project_id = '${projectIdAndRole.project_id}'`)).rows[0];
        const project = {
            project_name : projectNameAndInfo.project_name,
            role : projectIdAndRole.student_role,
            description : projectNameAndInfo.project_info
        };
        studentProjects.push(project);
    }

    return studentProjects;
}

const getSkills = async () => {
    return await conn.query(`SELECT skill_name FROM skills`);
}

const getSkillsIdsByStudentId = async (student_id) => {
    return await conn.query(`SELECT skill_id FROM student_skills WHERE student_id = '${student_id}'`);
}

const getStudentSkills = async (student_id) => {
    let studentSkillIds = [];
    await getSkillsIdsByStudentId(student_id).then((value) => {
        studentSkillIds = value.rows;
    });

    let studentSkills = [];
    for (const skill_id of studentSkillIds) {
        const skill_name = await conn.query(`SELECT skill_name FROM skills WHERE skill_id = '${skill_id.skill_id}'`);
        studentSkills.push(skill_name.rows[0].skill_name);
    }

    return studentSkills;
}

const getGroupByGroupId = async (group_id) => {
    const result = await conn.query(`SELECT group_num FROM groups WHERE group_id = '${group_id}'`);
    return result.rows[0].group_num;
}

const findStudentsByStatus = async (student_status) => {
    return await conn.query(`SELECT * FROM students WHERE status = '${student_status}'`);
}

const findStudentsIdsBySkill = async (skill_name) => {
    return await conn.query(`SELECT student_id FROM student_skills WHERE skill_id = (SELECT skill_id FROM skills WHERE skill_name = '${skill_name}')`);
}

const getStudentsIdsBySkill = async (skill_name) => {
    let idsBySkill = [];
    await findStudentsIdsBySkill(skill_name).then((value) => {
        for (const row of value.rows) {
            idsBySkill.push(+(row.student_id));
        }
    });
    return idsBySkill;
}

const findStudentsByGroup = async (student_group) => {
    return await conn.query(`SELECT * FROM students WHERE group_id = (SELECT group_id FROM groups WHERE group_num = '${student_group}')`);
}

const findUsersByName = async (student_name) => {
    return await conn.query(`SELECT * FROM students WHERE student_name = '${student_name}'`);
}

const findUsersByGroup = async (student_group) => {
    return await conn.query(`SELECT * FROM students WHERE group_id = (SELECT group_id FROM groups WHERE group_num = '${student_group}')`);
}

const findUsersByStatus = async (student_status) => {
    return await conn.query(`SELECT * FROM students WHERE status = '${student_status}'`);
}

const findUserByTg = async (tg) => {
    const result = await conn.query(`SELECT * FROM students WHERE telegram_contact = '${tg}'`);
    let student = result.rows[0];
    if (!student){
        return null;
    }
    const student_skills = await getStudentSkills(student.student_id);
    const student_group = await getGroupByGroupId(student.group_id);
    const statusImage = await getStatusImageByStatus(student.student_status);
    const studentProjects = await getProjectsByStudentId(student.student_id);
    return {
        userName: student.student_name,
        tg: student.telegram_contact,
        github: student.github,
        grp: student_group,
        skills: student_skills,
        personalInfo: student.about_me_info_short,
        statusImageSrc: statusImage,
        statusAltText: student.student_status,
        work_experience: student.experience_info,
        projects: studentProjects
    };
}

const findUsersIdsBySkill = async (skill_name) => {
    return await conn.query(`SELECT student_id FROM student_skills WHERE skill_id = (SELECT skill_id FROM skills WHERE skill_name = '${skill_name}')`);
}

const getUsersIdsBySkill = async (skill_name) => {
    let idsBySkill = [];
    await findUsersIdsBySkill(skill_name).then((value) => {
        for (const row of value.rows) {
            idsBySkill.push(+(row.student_id));
        }
    });
    return idsBySkill;
}

const findUsersBySkills = async (skills) => {
    let idsBySkills = [];
    for (const skill_name of skills) {
        await getUsersIdsBySkill(skill_name).then((value) => {
            idsBySkills.push(value);
        });
    }

    const intersectionUsersBySkills = idsBySkills.reduce((accumulator, array) => {
        return accumulator.filter(element => array.includes(element));
    });
    let usersIds = [];
    for (const id of intersectionUsersBySkills) {
        usersIds.push(+id);
    }

    const query = 'SELECT * FROM students WHERE student_id = ANY($1)';
    return await conn.query(query, [usersIds]);
}

const findStudentsBySkills = async (skills) => {
    let idsBySkills = [];
    for (const skill_name of skills) {
        await getStudentsIdsBySkill(skill_name).then((value) => {
            idsBySkills.push(value);
        });
    }

    const intersectionStudentsBySkills = idsBySkills.reduce((accumulator, array) => {
        return accumulator.filter(element => array.includes(element));
    });
    let studentsIds = [];
    for (const id of intersectionStudentsBySkills) {
        studentsIds.push(+id);
    }

    const query = 'SELECT * FROM students WHERE student_id = ANY($1)';
    const students = await conn.query(query, [studentsIds]);
    let result;
    await packData(students.rows).then((value) => {
        result = value;
    });

    return result;
}

const findPasswordByTg = async (login) => {
    try {
        return (await conn.query(`SELECT password_hash FROM students WHERE telegram_contact = '${login}' LIMIT 1`)).rows[0].password_hash;
    } catch {
        return 'Login not found';
    }
}

const updateStudentGithub = async (student_id, github) => {
    await conn.query(`UPDATE students SET github = '${github}' WHERE student_id = '${student_id}'`);
}

const updateStudentStatus = async (student_id, status) => {
    await conn.query(`UPDATE students SET student_status = '${status}' WHERE student_id = '${student_id}'`);
}

const updateStudentTg = async (student_id, tg) => {
    await conn.query(`UPDATE students SET telegram_contact = '${tg}' WHERE student_id = '${student_id}'`);
}

const updateStudentShortInfo = async (student_id, short_info) => {
    await conn.query(`UPDATE students SET about_me_info_short = '${short_info}' WHERE student_id = '${student_id}'`);
}

const updateStudentInfo = async (student_id, info) => {
    await conn.query(`UPDATE students SET about_me_info = '${info}' WHERE student_id = '${student_id}'`);
}

const updateStudentAnotherContact = async (student_id, another_contact) => {
    // Например, почта
    await conn.query(`UPDATE students SET another_contact = array_append(another_contact, '${another_contact}') WHERE student_id = '${student_id}'`);
}

const updateStudentExperienceInfo = async (student_id, experience_info) => {
    await conn.query(`UPDATE students SET experience_info = array_append(experience_info, '${experience_info}') WHERE student_id = '${student_id}'`);
}

const updateStudentSkills = async (student_id, skills) => {
    console.log(skills[1]);
    await conn.query(`DELETE FROM student_skills WHERE student_id = '${student_id}'`);
    for (const skill of skills) {
        const skill_id = (await conn.query(`SELECT skill_id FROM skills WHERE skill_name = '${skill}' LIMIT 1`)).rows[0].skill_id;
        console.log(skill_id);
        await conn.query(`INSERT INTO student_skills (student_id, skill_id) VALUES ('${student_id}', '${skill_id}')`);
    }
}

const deleteStudentSkill = async (student_id, skill) => {
    const skill_id = (await conn.query(`SELECT skill_id FROM skills WHERE skill_name = '${skill}' LIMIT 1`)).rows[0].skill_id;
    await conn.query(`DELETE FROM student_skills WHERE student_id = '${student_id}' AND skill_id = '${skill_id}'`);
}

const addStudentProject = async (student_id, project_name, project_info, project_link, role) => {
    let project_id;
    try {
        project_id = (await conn.query(`SELECT project_id FROM projects WHERE project_name = '${project_name}' LIMIT 1`)).rows[0].project_id
    } catch {
        await conn.query(`INSERT INTO projects (project_name, project_info, link) VALUES ('${project_name}', '${project_info}', '${project_link}')`);
        project_id = (await conn.query(`SELECT project_id FROM projects WHERE project_name = '${project_name}' LIMIT 1`)).rows[0].project_id;
    }

    try {
        await conn.query(`INSERT INTO student_projects (student_id, project_id, student_role) VALUES ('${student_id}', '${project_id}', '${role}')`);
    } catch (err) {
        console.log('У этого студента уже есть такой проект');
    }
}

const deleteStudentProject = async (student_id, proj_id) => {
    await conn.query(`DELETE FROM student_projects WHERE student_id = '${student_id}' AND project_id = '${proj_id}'`);
    const isEmptyProj = (await conn.query(`SELECT COUNT(*) FROM student_projects WHERE project_id = '${proj_id}'`));
    if (isEmptyProj) {
        await conn.query(`DELETE FROM projects WHERE project_id = '${proj_id}'`);
    }
}

exports.getUsers = getUsers;
exports.findUsersByName = findUsersByName;
exports.findUserByTg = findUserByTg;
exports.getPasswordByTg = findPasswordByTg;
exports.findUsersByGroup = findUsersByGroup;
exports.findUsersByStatus = findUsersByStatus;
exports.findUsersBySkills = findUsersBySkills;
exports.getStatusImageByStatus = getStatusImageByStatus;
exports.getSkills = getSkills;
exports.findStudentsByName = findStudentsByName;
exports.findStudentsByGroup = findStudentsByGroup;
exports.findStudentsByStatus = findStudentsByStatus;
exports.findStudentsBySkills = findStudentsBySkills;
exports.getSkills = getSkills;
exports.addStudentProject = addStudentProject;
exports.deleteStudentProject = deleteStudentProject;
exports.deleteStudentSkill = deleteStudentSkill;
exports.updateStudentSkills = updateStudentSkills;
exports.updateStudentTg = updateStudentTg;
exports.updateStudentStatus = updateStudentStatus;
exports.updateStudentInfo = updateStudentInfo;
exports.updateStudentShortInfo = updateStudentShortInfo;
exports.updateStudentGithub = updateStudentGithub;
exports.updateStudentAnotherContact = updateStudentAnotherContact;
exports.updateStudentExperienceInfo = updateStudentExperienceInfo;