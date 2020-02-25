'use strict';
module.exports = (sequelize, DataTypes) => {
  var Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    created: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Playlist.hasMany(models.Song);
      }
    models.Playlist.belongsTo(models.User){
          foreignKey: {
            allowNull: false
          }
        }
    }
  }
  });
  return Playlist;
};