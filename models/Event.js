module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    eventName: {
      type: DataTypes.STRING,
      unique: true
    },
    eventDate: DataTypes.DATE
  })
  return Event
}
