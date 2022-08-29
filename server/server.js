const express = require("express")
const {MongoClient} = require("mongodb")
const mongoose = require("mongoose")
const axios = require("axios")
const PORT = 3001
const cors = require("cors")
const app = express()

const uri = "mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority"

// app.use(cors({
//     origin: "http://localhost:3000"
// }))

async function main () {
    const uri = "mongodb+srv://wildbadger:jkhinpiqosq@clusterbankapp.pn7rge3.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri)

    try {
        await client.connect();
        // await listDatabases(client)
        // await createListing(client, {
        //     name: "Ken Adams",
        //     summary: "Money is just a means to make more money",
        //     status: "offline"
        // })
        // await createMultiple(client,[{
        //             name: "Ken Adams",
        //             summary: "Money is just a means to make more money",
        //             status: "offline"
        //         },
        //         {
        //             name: "Ava",
        //             summary: "Money is just a means to make more money",
        //             status: "online"
        //         },
        //         {
        //             name: "eve",
        //             summary: "Money is just a means to make more money",
        //             status: "null"
        //         }])
        // await findonelisting(client, "eve")
        // await updateList(client,"Ava",{status: "offline"})
        // await updatealllisting(client)
        // await deleteonefile(client, "Ken Adams")
        await deletemanyData (client, "Ken Adams")

    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

// async function connect() {
//     try{
//         await mongoose.connect(uri)
//         console.log("connected to mongodb")
//     } catch (err) {
//         console.error(err)
//     } finally {
//         await 
//     }
// }

main().catch(console.error)

async function deletemanyData(client, nameoflisting) {
    const result = await client.db("bank").collection("userdetails")
    .deleteMany({name: nameoflisting})

    console.log(`${result.deletedCount} was/were deleted`)
}

async function deleteonefile (client, nameoflisting) {
    const result = await client.db("bank").collection("userdetails")
    .deleteOne({name: nameoflisting})

    console.log(`${result.deletedCount} was/were deleted`)
}

async function updatealllisting (client) {
    const result = await client.db("bank").collection("userdetails").updateMany({
        status: {$exists: false}},
        {$set: {status: "all online"}})

        console.log(`${result.matchedCount} document(s) matched`)
        console.log(`${result.modifiedCount} document(s) updated`)
}

async function updateList(client, nameoflisting, updatelisting) {
    const result = await client.db("bank").collection("userdetails").updateOne({name: 
    nameoflisting}, {$set: updatelisting})

    console.log(`${result.matchedCount} document(s) matched`)
    console.log(`${result.modifiedCount} document(s) modified`)
}

async function findonelisting(client, nameoflisting) {
    const result = await client.db("bank").collection("userdetails").findOne({name:
    nameoflisting})

    if (result) {
        console.log(`found listing: ${nameoflisting}:`)
        console.log(result)
    } else {
        console.log(`no data found with the name ${nameoflisting}`)
    }
}

async function createMultiple(client, newListings) {
    const results = await client.db("bank").collection("userdetails").insertMany(newListings)
    console.log(`${results.insertedCount} listings created with
    following Ids:`)
    console.log(`${results.insertedIds}`)
}

async function createListing(client, newListing){
    const result = await client.db("bank").collection("userdetails").insertOne(newListing)

    console.log(`created listing ${result.insertedId}`)
}

async function listDatabases(client) {
    const databaseList = await client.db().admin().listDatabases()
    console.log("databases")
    databaseList.databases.forEach(db => {
        console.log(`-${db.name}`)
    });
}

app.listen(PORT, () => {
    console.log(`server started running at ${PORT}`)
})
