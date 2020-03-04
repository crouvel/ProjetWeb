'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    Artist_firstname: DataTypes.STRING,
    Artist_lastname: DataTypes.STRING,
    Artist_stagename: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Album);
  };
  return Artist;
};