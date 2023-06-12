const mongoose = require('mongoose')
const Password ='Jayamani12' 
const DB_Name = "BikeRent"

mongoose.connect(`mongodb+srv://sanjaymech2313:${Password}@sanjay.jhuniif.mongodb.net/${DB_Name}`,
{useNewUrlParser: true, useUnifiedTopology: true }
)