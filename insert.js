const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017'

MongoClient.connect(MONGODB_URL, (err, client) => {
    if (err)
        throw err
    const tododb = client.db('tododb')
    const todos = tododb.collection('todos')

    todos.insertOne({
        task: "task 4",
        priority: 4
    }, (err, result) => {
        if (err)
            throw err
        console.log(result)
    })
})