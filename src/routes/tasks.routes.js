const { Router } = require('express');
const { getALLTasks, getestablecimiento, getplatosushi, getplatopizzas, getplatoburger,getplatonapolitana, getplatoshawarma,getplatos, postSignUp, getSignUp, getLogIn, postLogIn } = require('../controllers/tasks.controllers')


const router = Router();

router.get('/signup', getSignUp);

router.post('/signup', postSignUp);

router.get('/login', getLogIn);

router.post('/login', postLogIn);

router.get('/tasks',getALLTasks);

router.get('/establecimiento',getestablecimiento);

router.get('/plato/sushi',getplatosushi);

router.get('/plato/pizza',getplatopizzas);

router.get('/plato/burger',getplatoburger);

router.get('/plato/napolitana',getplatonapolitana);

router.get('/plato/shawarma',getplatoshawarma);

router.get('/plato/platos',getplatos);

module.exports = router;