module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    teamName: {
      type: DataTypes.STRING,
      Unique: true
    },
    active: DataTypes.BOOLEAN
  })

  return Team
}
