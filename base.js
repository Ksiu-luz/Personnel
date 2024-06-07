"use strict";
const pg = require("pg");
const fs = require("fs");

const password = "rflhs777"

const config = {
    connectionString:
        "postgres://user1:rflhs777@rc1d-qb53sjksx5xp5wsl.mdb.yandexcloud.net:6432/PersonnelDB",
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("C:/Users/user/.postgresql/root.crt")
            .toString(),
    },
};

const conn = new pg.Client(config);

conn.connect((err) => {
    if (err) throw err;
});

const getUsers = async () => {
    const students = await conn.query(`SELECT * FROM students`);
    const users = await packData(students.rows);
    return users;
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
            github: '',
            group : student_group,
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
    const result = await conn.query(`SELECT * FROM students WHERE student_name = '${student_name}'`);
    return result;
}


const getStatusImageByStatus = async (student_status) => {
    if (student_status === 'Готов вступить в команду') {
        return 'images/status/status1.svg';
    }
    if (student_status === 'В команде') {
        return 'images/status/status3.svg'
    }

    return 'images/status/status2.svg'
}

const getProjectIdsAndRolesByStudentId = async (student_id) => {
    const result = await conn.query(`SELECT project_id, student_role FROM student_projects WHERE student_id = '${student_id}'`);
    return result;
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
    const result = await conn.query(`SELECT skill_name FROM skills`);
    return result;
}

const getSkillsIdsByStudentId = async (student_id) => {
    const result = await conn.query(`SELECT skill_id FROM student_skills WHERE student_id = '${student_id}'`);
    return result;
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
    const result = await conn.query(`SELECT * FROM students WHERE status = '${student_status}'`);
    return result;
}

const findStudentsIdsBySkill = async (skill_name) => {
    const result = await conn.query(`SELECT student_id FROM student_skills WHERE skill_id = (SELECT skill_id FROM skills WHERE skill_name = '${skill_name}')`);
    return result;
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
    const result = await conn.query(`SELECT * FROM students WHERE group_id = (SELECT group_id FROM groups WHERE group_num = '${student_group}')`);
    return result;
}

const findUsersByName = async (student_name) => {
    const result = await conn.query(`SELECT * FROM students WHERE student_name = '${student_name}'`);
    return result;
}

const findUsersByGroup = async (student_group) => {
    const result = await conn.query(`SELECT * FROM students WHERE group_id = (SELECT group_id FROM groups WHERE group_num = '${student_group}')`);
    return result;
}

const findUsersByStatus = async (student_status) => {
    const result = await conn.query(`SELECT * FROM students WHERE status = '${student_status}'`);
    return result;
}

const findUserByTg = async (tg) => {
    const result = await conn.query(`SELECT * FROM students WHERE telegram_contact = '${tg}'`);
    let student = result.rows[0];
    const student_skills = await getStudentSkills(student.student_id);
    const student_group = await getGroupByGroupId(student.group_id);
    const statusImage = await getStatusImageByStatus(student.student_status);
    const studentProjects = await getProjectsByStudentId(student.student_id);
    let packedStudent = {
        userName : student.student_name,
        tg : student.telegram_contact,
        github : '',
        group : student_group,
        skills : student_skills,
        personalInfo : student.about_me_info_short,
        statusImageSrc : statusImage,
        statusAltText : student.student_status,
        work_experience : student.experience_info,
        projects : studentProjects
    };
    return packedStudent;
}

const findUsersIdsBySkill = async (skill_name) => {
    const result = await conn.query(`SELECT student_id FROM student_skills WHERE skill_id = (SELECT skill_id FROM skills WHERE skill_name = '${skill_name}')`);
    return result;
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
    const result = await conn.query(query, [usersIds]);
    return result;
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


//getSkills().then((value) => {console.log(value.rows[0].skill_name)});
//findUsersBySkills(['PSQL master', 'C# master']).then((value) => {console.log(value.rows)});

exports.getUsers = getUsers;
exports.findUsersByName = findUsersByName;
exports.findUserByTg = findUserByTg;
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
