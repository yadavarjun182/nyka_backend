const express = require("express")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../models/user.model")


const userRouter = express.Router()

userRouter.post("/api/register", async (req, res) => {
    const payload = req.body
    try {
        const user = new UserModel(payload)
        await user.save()
        res.send({ "msg": "user registered successfully" })
    }
    catch (err) {
        res.send({ "msg": err.message })
    }
})


userRouter.post("/api/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email, password })
        if (user.length > 0) {
            let token = jwt.sign({ payload: "randompayload"}, "itsmysecretkey" )
            res.send({ "msg": "logged in", "token": token })
        }
        else {
            res.send({ "msg": "wrong credentials" })
        }
    }
    catch (err) {
        res.send({ "msg": err.message })
    }
})

module.exports = { userRouter }
