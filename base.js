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

const findUser = (userName) => {
    let person = {
        userName: "",
        password: "",
        tg: ""
    }
    conn.query(`select student_name, password_hash from students where telegram_contact = '@${userName}' LIMIT 1`, (err, q) => {
        if (err) throw err;
        person.userName = q.rows[0].student_name;
        person.password = q.rows[0].password_hash;
        person.tg = q.rows[0].telegram_contact;
    });
    return person;
}

exports.findUser = findUser;