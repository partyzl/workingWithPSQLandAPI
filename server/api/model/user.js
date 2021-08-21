const db = require('../dbConfig');

class User{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.age = data.age;
    }

    static get all(){
        return new Promise(async (res, rej)=>{
            try {
                const data = await db.query(`SELECT * FROM users;`);
                const users = await data.rows.map(user => new User(user))
                res(users)
            } catch (error) {
                rej("error getting all users");
            }
        })
    }
}

module.exports = User;