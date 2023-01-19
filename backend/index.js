

const __db_connect = require('./database/config')

__db_connect().then(()=>{
    require('./routes')
})