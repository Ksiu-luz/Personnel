"use strict";
const pg = require("pg");
const fs = require("fs");

const password = "rflhs777"

const config = {
    connectionString:
        "postgres://user1:rflhs777@rc1d-qb53sjksx5xp5wsl.mdb.yandexcloud.net:6432/PersonnelDB",
    ssl: {
        rejectUnauthorized: true,
        ca: fs
            .readFileSync("C:/Users/user/.postgresql/root.crt")
            .toString(),
    },
};

const conn = new pg.Client(config);

conn.connect((err) => {
    if (err) throw err;
});

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

const findUserById = async (student_id) => {
    const result = await conn.query(`SELECT * FROM students WHERE student_id = '${student_id}'`);
    return result;
}

const findUsersIdsBySkill = async (skill_name) => {
    const result = await conn.query(`SELECT student_id FROM student_skills WHERE skill_id = (SELECT skill_id FROM skills WHERE skill_name = '${skill_name}')`);
    return result;
}

const findUsersBySkills = async (skills) => {
    let idsBySkills = [];
    for (const skill_name of skills) {
        findUsersIdsBySkill(skill_name).then((value) => {
            let idsBySkill = [];
            for (const row of value.rows) {
                idsBySkill.push(+row.student_id);
            }
            idsBySkills.push(idsBySkill);
        });
    }
    
    const intersection = idsBySkills.reduce((accumulator, array) => {
        return accumulator.length === 0 ? array : accumulator.filter(element => array.includes(element));
    }, []);

    console.log(intersection);

    
    return 0;
}


findUsersBySkills(['PSQL master', 'C# master']);
//findUsersBySkills('PSQL master').then((value) => {console.log(value.rows)});
exports.findUsersByName = findUsersByName;
exports.findUsersByGroup = findUsersByGroup;
exports.findUsersByStatus = findUsersByStatus;