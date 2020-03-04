'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Userfirst_name: DataTypes.STRING,
    Userlast_name: DataTypes.STRING,
    UserEmail: DataTypes.STRING,
    UserPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Playlist);
  };
  return User;
};