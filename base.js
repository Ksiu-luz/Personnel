"use strict";
const pg = require("pg");
const fs = require("fs");
const url = require("url");

const password = "shlfR777"


let fff = `-----BEGIN CERTIFICATE-----
MIIE3TCCAsWgAwIBAgIKPxb5sAAAAAAAFzANBgkqhkiG9w0BAQ0FADAfMR0wGwYD
VQQDExRZYW5kZXhJbnRlcm5hbFJvb3RDQTAeFw0xNzA2MjAxNjQ0MzdaFw0yNzA2
MjAxNjU0MzdaMFUxEjAQBgoJkiaJk/IsZAEZFgJydTEWMBQGCgmSJomT8ixkARkW
BnlhbmRleDESMBAGCgmSJomT8ixkARkWAmxkMRMwEQYDVQQDEwpZYW5kZXhDTENB
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqgNnjk0JKPcbsk1+KG2t
eM1AfMnEe5RkAJuBBuwVV49snhcvO1jhKBx/pCnjr6biICc1/oAFDVgU8yVYYPwp
WZ2vH3ZtscjJ/RAT/NS9OKKG7kKknhFhVYxua5xhoIQmm6usBNYYiTcWoFm1eHC8
I9oddOLSscZYbh3unVRvt+3V+drVmUx9oSUKpqMgfysiv1MN6zB3vq9TFkbhz53E
k0tEcV+W2NnDaeFhLKy284FDKLvOdTDj1EDsSAihxl7sNEKpupNuhgyy2siOqUb+
d5mO/CRfaAKGg3E6hDM3pEi48E506dJdjPXWfHKSvuguMLRlb2RWdVocRZuyWxOh
0QIDAQABo4HkMIHhMBAGCSsGAQQBgjcVAQQDAgEAMB0GA1UdDgQWBBRMU5uItjx+
TOicX1+ovC1Xq2PSnzAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8E
BAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBSrucX/oe/mUx0zOSKE
0XbUN04tajBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3Jscy55YW5kZXgucnUv
WWFuZGV4SW50ZXJuYWxSb290Q0EvWWFuZGV4SW50ZXJuYWxSb290Q0EuY3JsMA0G
CSqGSIb3DQEBDQUAA4ICAQAsR5Lb4Pv2FD0Kk+4oc1GEOnehxKLsQtdV81nrU+IV
l9pr2oNMdi8lwIolvHZRllLM4Ba5AcRH6YJ5fe7AjKm+5EdSkhqVWo2UOllRCbtS
wmL50+erOAkxstSlRkO6b8x1L0MOBKv54E5YcQ/Wwt27ldSb6RkEmJBGvmxObAaf
5zc51pqSqao9tnldYaCblEQ/Zmy43FliIpa2eUJoh8DqK8bVo2gcI3wbQ32tWs9u
wvKk8fo4lAdhCwhv+QHuqau1VAY9hPU106bsFIDUmijTMxjAobKBi6CkIX6EbNHU
Jv4DzYVLlDd2y0CADdn2F6I70xpCBn5cquSGuvFbqZjQDmIHwb7WQSxadkiGRWfc
zVTnmiHjJONJJIpE2t+FOV3hc+8o98OzOtNaH2QQ9j6dnKvtIGKGFeNSDp0vXPOi
QhHiIyuB7eWx+g2whktQ74UCpGDSXYnEW3s8w5wezVWIEmouq7q4rCEkTNvJ7Ico
43AgUdPzAFS2zYktw1C+cbUALM8smvXbXrXOBzMmscjIhtXvLMrpPeh23VfdJfQB
0rN2BmRCLUE8JOV+o0k98XMm83oN+lGkL1l+hyoj3ok1uI3JrsWOcDyjOds3ptcN
KimJLm27ndjcxDNo/iA6gefMJuCxFRaqI+eF4P0jSkMgnnQqZkvLGFuHCw8eRDhm
bw==
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFGTCCAwGgAwIBAgIQJMM7ZIy2SYxCBgK7WcFwnjANBgkqhkiG9w0BAQ0FADAf
MR0wGwYDVQQDExRZYW5kZXhJbnRlcm5hbFJvb3RDQTAeFw0xMzAyMTExMzQxNDNa
Fw0zMzAyMTExMzUxNDJaMB8xHTAbBgNVBAMTFFlhbmRleEludGVybmFsUm9vdENB
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAgb4xoQjBQ7oEFk8EHVGy
1pDEmPWw0Wgw5nX9RM7LL2xQWyUuEq+Lf9Dgh+O725aZ9+SO2oEs47DHHt81/fne
5N6xOftRrCpy8hGtUR/A3bvjnQgjs+zdXvcO9cTuuzzPTFSts/iZATZsAruiepMx
SGj9S1fGwvYws/yiXWNoNBz4Tu1Tlp0g+5fp/ADjnxc6DqNk6w01mJRDbx+6rlBO
aIH2tQmJXDVoFdrhmBK9qOfjxWlIYGy83TnrvdXwi5mKTMtpEREMgyNLX75UjpvO
NkZgBvEXPQq+g91wBGsWIE2sYlguXiBniQgAJOyRuSdTxcJoG8tZkLDPRi5RouWY
gxXr13edn1TRDGco2hkdtSUBlajBMSvAq+H0hkslzWD/R+BXkn9dh0/DFnxVt4XU
5JbFyd/sKV/rF4Vygfw9ssh1ZIWdqkfZ2QXOZ2gH4AEeoN/9vEfUPwqPVzL0XEZK
r4s2WjU9mE5tHrVsQOZ80wnvYHYi2JHbl0hr5ghs4RIyJwx6LEEnj2tzMFec4f7o
dQeSsZpgRJmpvpAfRTxhIRjZBrKxnMytedAkUPguBQwjVCn7+EaKiJfpu42JG8Mm
+/dHi+Q9Tc+0tX5pKOIpQMlMxMHw8MfPmUjC3AAd9lsmCtuybYoeN2IRdbzzchJ8
l1ZuoI3gH7pcIeElfVSqSBkCAwEAAaNRME8wCwYDVR0PBAQDAgGGMA8GA1UdEwEB
/wQFMAMBAf8wHQYDVR0OBBYEFKu5xf+h7+ZTHTM5IoTRdtQ3Ti1qMBAGCSsGAQQB
gjcVAQQDAgEAMA0GCSqGSIb3DQEBDQUAA4ICAQAVpyJ1qLjqRLC34F1UXkC3vxpO
nV6WgzpzA+DUNog4Y6RhTnh0Bsir+I+FTl0zFCm7JpT/3NP9VjfEitMkHehmHhQK
c7cIBZSF62K477OTvLz+9ku2O/bGTtYv9fAvR4BmzFfyPDoAKOjJSghD1p/7El+1
eSjvcUBzLnBUtxO/iYXRNo7B3+1qo4F5Hz7rPRLI0UWW/0UAfVCO2fFtyF6C1iEY
/q0Ldbf3YIaMkf2WgGhnX9yH/8OiIij2r0LVNHS811apyycjep8y/NkG4q1Z9jEi
VEX3P6NEL8dWtXQlvlNGMcfDT3lmB+tS32CPEUwce/Ble646rukbERRwFfxXojpf
C6ium+LtJc7qnK6ygnYF4D6mz4H+3WaxJd1S1hGQxOb/3WVw63tZFnN62F6/nc5g
6T44Yb7ND6y3nVcygLpbQsws6HsjX65CoSjrrPn0YhKxNBscF7M7tLTW/5LK9uhk
yjRCkJ0YagpeLxfV1l1ZJZaTPZvY9+ylHnWHhzlq0FzcrooSSsp4i44DB2K7O2ID
87leymZkKUY6PMDa4GkDJx0dG4UXDhRETMf+NkYgtLJ+UIzMNskwVDcxO4kVL+Hi
Pj78bnC5yCw8P5YylR45LdxLzLO68unoXOyFz1etGXzszw8lJI9LNubYxk77mK8H
LpuQKbSbIERsmR+QqQ==
-----END CERTIFICATE-----`

const config = {
    connectionString:
        "postgres://user1:shlfR777@rc1d-qb53sjksx5xp5wsl.mdb.yandexcloud.net:6432/PersonnelDB",
    ssl: {
        rejectUnauthorized: true,
        ca: fff,
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
    const result = await conn.query(`SELECT * FROM students WHERE student_name = '${student_name}'`);
    return result;
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
    if (!student){
        return null;
    }
    const student_skills = await getStudentSkills(student.student_id);
    const student_group = await getGroupByGroupId(student.group_id);
    const statusImage = await getStatusImageByStatus(student.student_status);
    const studentProjects = await getProjectsByStudentId(student.student_id);
    let packedStudent = {
        userName : student.student_name,
        tg : student.telegram_contact,
        github : student.github,
        grp : student_group,
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

const getPasswordByStudentName = async (login) => {
    try {
        return (await conn.query(`SELECT password_hash FROM students WHERE telegram_contact = '${login}' LIMIT 1`)).rows[0].password_hash;
    } catch {
        return 'Login not found';
    }
}
//getPasswordByStudentName('serzhinho285').then((value) => console.log(value))

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
//deleteStudentSkill(6, 'прирожденный оратор').then(() => console.log(0));

const addStudentProject = async (student_id, project_name, project_info, project_link, role) => {
    let project_id;
    try {
        const proj_id = (await conn.query(`SELECT project_id FROM projects WHERE project_name = '${project_name}' LIMIT 1`)).rows[0].project_id;
        project_id = proj_id
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
//addStudentProject(6, 'Pingwin Will Win', 'Игра про пингвиненка, который на льдинах плывет к маме', '', 'Дизайнер').then((value) => console.log(2));

const deleteStudentProject = async (student_id, proj_id) => {
    await conn.query(`DELETE FROM student_projects WHERE student_id = '${student_id}' AND project_id = '${proj_id}'`);
    const isEmptyProj = (await conn.query(`SELECT COUNT(*) FROM student_projects WHERE project_id = '${proj_id}'`));
    if (isEmptyProj) {
        await conn.query(`DELETE FROM projects WHERE project_id = '${proj_id}'`);
    }
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
exports.getPasswordByStudentName = getPasswordByStudentName;
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
