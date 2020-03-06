var bcrypt  = require('bcrypt');
var jwtUtils= require('../utils/jwt.utils');
var Sequelize = require('sequelize');

//Constantes
const EMAIL_REJEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REJEX=/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

const sequelize = new Sequelize('heroku_802e11dc5cef23a', 'b540f1accf28a8', 'd7de8a86', {
    host: 'eu-cdbr-west-02.cleardb.net',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

var user = sequelize.define('user');

module.exports = {
    register: function(req, res){
        //Paramètres
        var email = req.body.email;
        var first_name = req.body.first_name;
        var last_name = req.body.last_name;
        var password = req.body.password;
        console.log(email)
        
        if(email==null || password==null || first_name==null || last_name==null){
            return res.status(400).json({'error': 'missing parameters'});
        }

        
        if(nom.length<2 || nom.length>=20 || prenom.length<2 || prenom.length>=20){
            res.status(400);
            error={status:400, stack:'stack'}
            return res.render('error',{message: 'invalid name and/or firstname'});
        }
        
        //Email invalid
        
        if(!EMAIL_REJEX.test(email)){
            return res.status(400).json({'error': 'invalid email'});
        }

        //Mot de passe invalide, doit contenir 1 maj, 1 min, 1 nombre, 1 caractère spécial et doit avoir une longueur entre 6 et 10
        if(!PASSWORD_REJEX.test(password)){
            return res.status(400).json({'error': 'invalid password'});
        }

        user.findOne({
            attributes: ["email"],
            where: {email: email}
        })
        .then(function(userFound){
            if(!userFound){
                bcrypt.hash(function(err, bcryptedpassword){
                    var newUser = user.create({
                        email: email,
                        password : bcryptedpassword,
                        first_name: first_name,
                        last_name: last_name
                    })
                    .then(function(newUser){
                        return res.status(201).json({'userId': newUser.id})
                    })
                    .catch(function(err){
                        return res.status(500).json({'error':'cannot add user'});
                    });
                })
            }else{
                return res.status(409).json({ 'error': 'user already exists'});
            }
        }).catch(function(err){
            return res.status(500).json({'error': 'unable to verify if user already exists'});
        });
    },
    logIn: function(req,res){
        //Param
        var email = req.body.email;
        var password = req.body.password;
        if(email==null || password==null ){
            return res.status(400).json({'error': 'missing parameters'});
        }
        user.findOne({
            where: {email: email}
        })
        .then(function(userFound){
            if(userFound){
                bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt){
                    if(resBycrypt){
                        var token=jwtUtils.generateTokenForUser(userFound);
                        res.cookie('token',token,{maxAge:3600000, httpOnly: true})
                        res.status(200)
                        return res.redirect("/library");
                    }else{
                        return res.status(403).json({'error': 'invalid password'});
                    }

                })
            }else{
                return res.status(404).json({ 'error': 'user not exist in DB' });
            }
        }).catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'});
        });
    },
    getClient: function(id,req,res,callback){
        
        models.User.findOne({
            where: {id: id}
        })
        .then(function(userFound){
            if(userFound){
                callback( userFound.dataValues);
            }else{
                return res.status(404).json({ 'error': 'user not exist in DB' });
            }
        }).catch(function(err){
            return res.status(500).json({'error': 'unable to find user'});
        });
    }

}