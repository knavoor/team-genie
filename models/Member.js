
var Promise = require('bluebird')
var bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
var config = require('../config/config')

function hashPassword (user, options) {
  const SALT_FACTOR = config.SALT_WORK_FACTOR

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    dob: {
      type: DataTypes.DATE
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })
  Member.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return Member
}
