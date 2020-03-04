'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    Song_title: DataTypes.STRING,
    Song_attachment: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    models.Message.belongsTo(models.Playlist, {
      foreignKey: {
        allowNull: false
      }
    })
    models.Message.belongsTo(models.Album, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Song;
};