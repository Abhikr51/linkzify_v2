const mongoose = require('mongoose')
const colors = require('colors')
const url = "mongodb://localhost:27017"
// const database_name = 'linkzifyv2'
mongoose.set('strictQuery', true);
let connectionString = url+ "/" + process.env.DB_NAME
let altlas_url = "mongodb+srv://linkzify_v2:DB%40abhikr51@cluster0.qgtchhz.mongodb.net/linkzify_v2"
if(altlas_url){
    connectionString = altlas_url
}
//via mongoose package
const __db_connect = async ()=>{
    await mongoose.connect(connectionString)
    .then(() => console.log('============ Connected! MongoDB with Mongoose ============'.magenta));

}
// __db_connect()
module.exports = __db_connect