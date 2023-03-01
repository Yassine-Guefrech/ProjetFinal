const express = require('express')
const { signUp, signIn } = require('../Conrollers/User')
const isAuth = require('../Middlewares/isAuth')
const { registerValidation, Validation, logginValidation } = require('../Middlewares/Validator')
const User = require('../Models/User')

const userRouter = express.Router()


userRouter.post('/SignUp',registerValidation,Validation,signUp)
userRouter.post('/SignIn',logginValidation,Validation,signIn)
userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))

userRouter.get('/getAllUsers',async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({Msg : "List of users",users})
    } catch (error) {
        res.status(500).send('Could not get users')
    }
})

userRouter.get('/getOneUser/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const oneUser = await User.findById(id)
        res.status(200).send({Msg:'The user is',oneUser})
    } catch (error) {
        res.status(500).send('Could not get user')
    }
})

userRouter.put('/updateUser/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'User updated'})
    } catch (error) {
        res.status(500).send('Could not update user')
    }
})

userRouter.delete('/deleteUser/:id',async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({Msg : 'user deleted'})
    } catch (error) {
        res.status(500).send('Could not delete user')
    }
})

module.exports = userRouter