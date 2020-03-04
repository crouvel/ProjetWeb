'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    Playlist_title: DataTypes.STRING,
    Playlist_creationdate: DataTypes.DATE
  }, {});
  Playlist.associate = function(models) {
    // associations can be defined here
    models.Message.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
    models.User.hasMany(models.Song);
  };
  return Playlist;
};