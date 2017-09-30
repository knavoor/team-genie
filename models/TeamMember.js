module.exports = (sequelize, DataTypes) => {
  const TeamMember = sequelize.define('TeamMember', {
    teamId: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'Team',
        key: 'id'
      }
    },
    memberId: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'Member',
        key: 'id'
      }
    },
    isAdmin: DataTypes.BOOLEAN
  })
  TeamMember.associate = function (models) {
    TeamMember.belongsTo(models.Event)
    TeamMember.belongsTo(models.Member)
  }
  return TeamMember
}
