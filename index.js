const express =require('express');
const sumador = require('./index2')
const app = express();  

app.use(express.json());
let Mototaxis= []
// const Mototaxis = [
//     {cedula:123456789, name: 'Brayan Mayers', edad: 20, Vehiculio:"Boxer"},
//     {cedula:1066348730, name: 'Luis Vega', edad: 20, Vehiculio:"Tvs Sport"},
//     {cedula:9876543210, name: 'Deimis Henao', edad: 20, Vehiculio:"RX"}
// ]

//coneccion mysql
let mysql = require("mysql");
let conexion = mysql.createConnection({
    host: "localhost",
    database: "datebase",
    user: "root",
    password : "root"
});

conexion.connect(function(err){
    if(err) throw err;
    else console.log("conexion exitosa");
})


const query = "select * from users";
conexion.query(query,function(err,lista){
    if(err){
        throw err;
    } 
    else{
        Mototaxis=lista
        console.log(Mototaxis)
    }   
    conexion.end();                 
})





app.get('/',(req, res)=>{
    res.send('Mototaxi api' + sumador.suma(2,3));
    
})

app.get('/api/mototaxis',(req,res)=>{
    res.send(Mototaxis);
})

app.get('/api/mototaxis/:cedula',(req,res)=>{
    const Mototaxi = Mototaxis.find(c => c.cedula === parseInt(req.params.cedula));
    if (!Mototaxi) return res.status(404).send("Mototaxista no encontrado")
    else res.send(Mototaxi)
})

const port = process.env.port || 80
app.listen(port, ()=> console.log(`Escuchando en puerto ${port}`))