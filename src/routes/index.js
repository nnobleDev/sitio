const express = require('express');
const router = express.Router();
const passport = require('passport');

const home = require('../controllers/home');
const user = require('../controllers/user');
//const posts = ;
//const image = ;

//RUTAS
module.exports = app =>{
    router.get('/', home.index);
    router.get('/about', home.about);
    router.get('/usuario/signin', user.signin);
    router.get('/usuario/signup', user.signup);
    router.post('/usuario/signin', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/usuario/signin',
        failureFlash:  true
      }));
    router.post('/usuario/signup', (req,res)=>{
        console.log(req.body);
        res.send('Ok')
    });  


    app.use(router);
}

