const pool = require('../db')


const getALLTasks = async (req, res) => {
    res.send('retrieving a list of tasks');
}

const getestablecimiento = async (req, res) => {
try{

    const result = await pool.query('SELECT * FROM establecimiento')
    res.json(result.rows);
}catch{
    console.log(error.message);
}
}

const getplatosushi = async (req, res) => {
    try{
    
        const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 1 ;')
        res.json(result.rows);
    }catch{
        console.log(error.message);
    }
    }

    const getplatopizzas = async (req, res) => {
        try{
        
            const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 2 ;')
            res.json(result.rows);
        }catch{
            console.log(error.message);
        }
        }

 const getplatoburger = async (req, res) => {
        try{
        
            const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 3 ;')
            res.json(result.rows);
        }catch{
            console.log(error.message);
        }
        }

        const getplatonapolitana = async (req, res) => {
            try{
            
                const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 4 ;')
                res.json(result.rows);
            }catch{
                console.log(error.message);
            }
            }

            const getplatoshawarma = async (req, res) => {
                try{
                
                    const result = await pool.query('SELECT nom_plato, precio_plato from plato WHERE id_establecimiento = 4 ;')
                    res.json(result.rows);
                }catch{
                    console.log(error.message);
                }
                }

                const getplatos = async (req, res) => {
                    try{
                    
                        const result = await pool.query('SELECT * FROM plato')
                        res.json(result.rows);
                    }catch{
                        console.log(error.message);
                    }
                    }

module.exports = {
    getALLTasks,
    getestablecimiento,
    getplatosushi,
    getplatopizzas,
    getplatoburger,
    getplatonapolitana,
    getplatoshawarma,
    getplatos
}