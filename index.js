// here we are going to use the jwt instead of the tokens we used to use
// because in the case of the token we had to hit the database everytime we had a get request to the server 
// whereas in the case of the jwt we wont have to hit the database at every instance
// some thing could also be done at the backend server itself

const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express()
let data = []
const JWT_SECRET = "HI I AM ANIKET"

app.use(express.json())
app.use(cors())
app.post("/signup",function(req,res){
    let username  = req.body.username
    let password = req.body.password

    data.push({
        "username":username,
        "password":password
    })
    res.json({
        Message: "You have been signed up."
    })
})

app.post("/signin",function(req,res){
    let username  = req.body.username
    let password = req.body.password
    let founduser = null

    for(let i = 0;i<data.length;i++){
        if(data[i].username == username && data[i].password == password){
            founduser = data[i]
            break
        }
    }
    if(founduser){
        let jwebtoken = jwt.sign({
            "username": username
        },JWT_SECRET)
        res.json({
                token: jwebtoken,
        })
    }
    else{
        res.status(403).json({
            Message: "Wrong user credentials"
        })
    }
})

app.get("/me",function(req,res){
    let token = req.headers.token
    let decodedinfo = jwt.verify(token,JWT_SECRET)
    res.json(decodedinfo)
})

app.delete("/logout",function(req,res){
    let token = req.headers.token
    let username = jwt.verify(token,JWT_SECRET).username
    for(let i = 0;i<data.length;i++){
        if(data[i].username == username){
            data.pop(i)
            break
        }
    }
    res.json({
        "message": "You are logged out."    
    })
})
app.listen(3000)