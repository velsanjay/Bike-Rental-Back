const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRound = 10
const secretKey ="hgjyte546rfghjyu76"

const hashPassword = async(password) =>{
    let salt = await bcrypt.genSalt(saltRound)
    let hashedPassword = await bcrypt.hash(password,salt)
    return hashedPassword
}

const hashCompare = async(password,hashedPassword) =>{
    return await bcrypt.compare(password,hashedPassword)
}

const makeid = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const createToken = async(payload) =>{
    let token = await jwt.sign(payload,secretKey,{expiresIn:"30m"})
    return token
}

const validate = async(req,res,next)=>{
    if(req.headers.authorization)
      {
          let token = req.headers.authorization.split(" ")[1]
          let data = await jwt.decode(token)
          if(Math.floor((+new Date())/1000) < data.exp)
              next()
          else
              res.status(401).send({message:"Token Expired"})
      }
      else
      {
          res.status(400).send({message:"Token Not Found"})
      }
  }

module.exports = {hashPassword, hashCompare,makeid , createToken, validate}