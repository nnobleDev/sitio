const passport = require('passport');
const User = require('../models/user');

const ctrl = {}

    ctrl.signin = (req,res)=>{
        res.render('usuario/signin');
    }

    ctrl.signup = (req,res)=>{
        res.render('usuario/signup');
    }
    ctrl.register = (req,res)=>{
        //const {usuario , password} = req.body;
        console.log(req.body);
        res.send('Ok');
    }
module.exports = ctrl;