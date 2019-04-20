const { MongoClient } = require('mongodb')

const MONGODB_URL = "mongodb://localhost:27017"

MongoClient.connect(MONGODB_URL, (err, client) => {

    if (err)
        throw err

    const todos = client.db('tododb').collection('todos')
    todos.updateMany({
        task: "task 1"
    },
        {
            $set: {
                priority: 11
            }
        }, (err, result) => {

            console.log(result)
        })

})