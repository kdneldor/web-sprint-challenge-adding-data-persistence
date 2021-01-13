const db = require("../data/config")

function find() {
    return db("resources")
}

function findById(id) {
    return db("resources").where("id", id).first();
}

function insert(resource) {
    return db("resources")
    .insert(resource)
    .then((ids) => {
        return findById(ids[0])
    })
}

module.exports = {
    find,
    findById,
    insert,
}