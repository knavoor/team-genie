module.exports = (sequelize, DataTypes) => {
  const TeamEvent = sequelize.define('TeamEvent', {
    teamId: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'Team',
        key: 'id'
      }
    },
    eventId: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'Event',
        key: 'id'
      }
    }
  })
  TeamEvent.associate = function (models) {
    TeamEvent.belongsTo(models.Event)
    TeamEvent.belongsTo(models.Team)
  }
  return TeamEvent
}
