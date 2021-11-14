const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const db = require('./config/keys').mongoURI

const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err))

app.listen(3001, (req, res) => {
    console.log("Listening on port 3001...")
})

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/createUser', async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json(user)
})

app.get('/', (req, res) => {
    res.send("Server working...")
})