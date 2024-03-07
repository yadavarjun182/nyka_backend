const express = require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/users.route")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("HOME PAGE")
})

app.use("/users",userRouter)


app.listen(8080, async () => {

    try {
        await connection
        console.log("**************************connected to db**************************")
    }
    catch (err) {
        console.log(err.message)
    }
    console.log("server is running at port 8080")
})