const db = require('./db.js');
const helper = require('../helper.js');

async function getAllTasks() {
    const rows = await db.query('select * from task');
    return helper.emptyOrNot(rows);
}

async function addTask(task) {
    const result = await db.query(`insert into task (description) values ('${task.description}')`);
    task.id = result.insertId;
    return task;
}

async function removeTask(id) {
    const result = await db.query(`delete from task where id = ${id}`);
    return id;
}

async function updateTask(task) {
    const result = await db.query(`update task set description='${task.description}' where id='${task.id}'`);
    return task;
}

module.exports = {
    getAllTasks,
    addTask,
    removeTask,
    updateTask
}