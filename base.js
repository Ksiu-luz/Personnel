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

const findUserByTg = async (tg) => {
    const result = await conn.query(`select student_name, password_hash from students where telegram_contact = '@${tg}' LIMIT 1`);
    return result.rows[0];
}

findUserByTg("Andrew").then((value) => {console.log(value.student_name)});
exports.findUserByTg = findUserByTg;