'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    Album_name: DataTypes.STRING,
    Album_date: DataTypes.DATE
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    models.Message.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    })
    models.User.hasMany(models.Song);
  };
  return Album;
};