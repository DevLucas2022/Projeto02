const app = require('./app.js');
const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'})

mongoose.set('strictQuery',false);

mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.Promise = global.Promise
mongoose.connection.on('error',(error)=>{
    console.error("ERROR: "+error.message)
})

require('dotenv').config({path:'variables.env' || 7777});
app.set('port',process.env.PORT);
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: " + server.address().port)
});


