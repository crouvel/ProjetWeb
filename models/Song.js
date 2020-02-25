'use strict';
module.exports = (sequelize, DataTypes) => {
  var Song = sequelize.define('Song', {
    name: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
        models.Song.belongsTo(models.Playlist, {
           foreignKey: {
            allowNull: false
          }
        })
        models.Song.belongsTo(models.Album){
          foreignKey: {
            allowNull: false
          }
        }
      }
    }
  });
  return Song;
};