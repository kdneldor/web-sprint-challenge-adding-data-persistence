const db = require("../data/config")

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects").where("id", id).first();
}

function insert(project) {
    return db("projects")
    .insert(project)
    .then((ids) => {
        return findById(ids[0])
    })
}

module.exports = {
    find,
    findById,
    insert,
}