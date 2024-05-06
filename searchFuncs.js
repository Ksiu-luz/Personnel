const db = require('./base')

class UserController {
    async findUsersByName(req, res) {
        const name = req.body;
        const usersWithName = await db.query(`SELECT * FROM students WHERE student_name = '@${userName}'`);
        res.json(usersWithName.rows);
    };

    async findUsersByGroup(req, res) {
        const group = req.body;
        const group_id = +await db.query(`SELECT group_id FROM groups WHERE student_name = '@${group}'`);
        const usersWithGroup = await db.query(`SELECT * FROM students WHERE group_id = '@${group_id}'`);
        res.json(usersWithGroup.rows);
    };

    async findUsersByStatus(req, res) {
        const status = req.body;
        const usersWithStatus = await db.query(`SELECT * FROM students WHERE status = '@${status}'`);
        res.json(usersWithStatus.rows);
    };

    /*async findUsersBySkills(req, res) {
        const skills = req.body;
        let skill_ids = [];
        let request = 'SELECT * FROM students';
        for (const skill of skills) {
            skill_ids.push(+await db.query(`SELECT skill_id FROM skills WHERE student_name = '@${skill}'`));
        }

        let timer = 0;
        for (const id of skill_ids) {
            if (timer === 0) {
                request = request.concat(` `, `WHERE skill_id  = ${id}`);
            } else {
                request = request.concat(` and `, `skill_id  = ${id}`);
            }
            
        }
        const usersIdsWithSkill = await db.query(`SELECT * FROM student_skills WHERE skill_id = '@${skill_id}'`);
        
        const usersWithStatus = await db.query(`SELECT * FROM students WHERE status = '@${status}'`);
        res.json(usersWithStatus.rows);
    };*/
}