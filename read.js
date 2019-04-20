const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017'

MongoClient.connect(MONGODB_URL, (err, client) => {
    if (err)
        throw err
    const todos = client.db('tododb').collection('todos')
    todos.find({

    }).toArray((err, result) => {
        if (err)
            throw err

        console.log(result)
    })
})