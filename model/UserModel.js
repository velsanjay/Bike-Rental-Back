const mongoose =require('mongoose')

const userModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    validation:{
        type:Boolean,
        default:false
    },
    value:{
        type:String,
        required:true,
        unique:true
    },
    book:{
        type:mongoose.Schema.Types.ObjectId
    },
    licenceNo:{
        type:String,
        required:true
    },
    expDate:{
        type:Date,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model('user',userModel)