const mongoose = require('mongoose')
const colors = require('colors')
const url = "mongodb://localhost:27017"
const database_name = 'linkzifyv2'
mongoose.set('strictQuery', true);

//via mongoose package
const __db_connect = async ()=>{
    await mongoose.connect(url+ "/" + database_name)
    .then(() => console.log('============ Connected! MongoDB with Mongoose ============'.magenta));

}
// __db_connect()
module.exports = __db_connect