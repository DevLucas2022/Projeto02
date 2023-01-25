// Fazendo a importação do express
const express = require("express");
const res = require("express/lib/response");

const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Olá")
})

const app = express();
app.use('/',router);

module.exports = app;