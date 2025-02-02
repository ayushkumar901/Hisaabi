const mongoose = require('mongoose')

try{
    mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
        console.log("Connected to mongo db.")
    })
}catch(err){
    console.log(err);

}
//heyyyy
module.exports = mongoose.connection;