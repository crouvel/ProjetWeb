var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var Sequelize = require('Sequelize');
//Routes

const sequelize = new Sequelize('heroku_802e11dc5cef23a', 'b540f1accf28a8', 'd7de8a86', {
    host: 'eu-cdbr-west-02.cleardb.net',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

module.exports = {
   register: function(req, res) {
        var email = req.User.email;
        var first_name = req.User.first_name;
        var last_name = req.User.last_name;
        var password = req.User.password;

        if(email == null || first_name == null || password == null){
            return res.status(400).json({'error': 'missing parameters'});
        }else{
        
        User.findOne({
            attributes: ['email'],
            where: { email: email}
        })
        .then(function(userFound){
            if(!userFound){
                bcrypt.hash(password, 5, function( err, bcryptedPassword){
                    var newUser = models.User.create({
                        email: email,
                        first_name: first_name,
                        last_name: last_name,
                        password: bcryptedPassword
                    })
                    .then(function(newUser){
                        return res.status(201).json({
                            'id_User': newUser.id
                        })
                    })
                    .catch(function(err){
                        return res.status(500).json({'error': 'cannot add user'});
                    });
                });
            }else {
              return res.status(409).json({'error': 'user already exist'});  
            }
        })
        .catch(function(err){
            return res.status(500).json({'error': 'unable to verify user'});
        })
    }
    
    },
   login: function(req, res) {

   }


   
}