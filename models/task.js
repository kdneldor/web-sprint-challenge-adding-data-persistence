const db = require("../data/config")

function find() {
    return db("tasks")
}

function findById(id) {
    return db("tasks").where("id", id).first();
}

function insert(task) {
    return db("tasks")
    .insert(task)
    .then((ids) => {
        return findById(ids[0])
    })
}

module.exports = {
    find,
    findById,
    insert,
}