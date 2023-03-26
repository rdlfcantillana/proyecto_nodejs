const pool = require('../db')
const path = require('path');


async function getALLTasks(req, res){
    res.send("Devolviendo una lista de tareas");
}

async function getestablecimiento(req, res){
    try{
        const result = await pool.query('SELECT * FROM establecimiento')
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}

async function getplatosushi(req, res){
    try{
        const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 1 ;')
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}

async function getplatopizzas(req, res){
    try{
        const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 2 ;')
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}

async function getplatoburger(req, res){
    try{
        const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 3 ;');
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}

async function getplatonapolitana(req, res){
    try{
        const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 4 ;')
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}

async function getplatoshawarma(req, res){
    try{   
        const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 4 ;');
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}

async function getplatos(req, res){
    try{
        const result = await pool.query('SELECT * FROM plato');
        res.json(result.rows);
    }
    catch{
        res.send(error.message);
    }
}


async function getSignUp(req, res){
    const filePath = path.join(__dirname, "../views_test/sign_up/index.html");
    res.sendFile(filePath);
}

function postSignUp(req, res, next){
    const {user, password, samePassword} = req.body;

    if (password == samePassword){
        pool.query("INSERT INTO users VALUES ($1, $2)", [user, password], (err, result) => {
            if (err) return next(err);

            res.send("Usuario registrado");
        });
    }
    else{
        res.send("Las claves no coiniciden");
    }
}

async function getLogIn(req, res){
    const filePath = path.join(__dirname, "../views_test/log_in/index.html");
    res.sendFile(filePath);
}

async function postLogIn(req, res){
    const {user, password} = req.body;
    const result = await pool.query('SELECT * FROM users');
    const table = result.rows;
    let loggedIn = false;

    for (let i=0; i<table.length; i++) {
        if (table[i].id == user && table[i].password == password){
            res.send("Acceso exitoso");
            loggedIn = true;
            break;
        }
    }

    if (!loggedIn) res.send("Acceso denegado");
}

module.exports = {
    getALLTasks,
    getestablecimiento,
    getplatosushi,
    getplatopizzas,
    getplatoburger,
    getplatonapolitana,
    getplatoshawarma,
    getplatos,
    postSignUp,
    getSignUp,
    getLogIn,
    postLogIn
}