const passport = require('passport')
const db = require('./models')

const LocalStratergy = require('passport-local').Strategy
// const config = require('./config/config')

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  db.Member.find({where: {id: user.id}}).success(function (user) {
    done(null, user).error(function (err) {
      done(err, null)
    })
  })
})

passport.use(new LocalStratergy(
  function (username, password, done) {
    db.Member.find({where: {email: username}}).success(
      function (user) {
        if (user.comparePassword(password)) { return done(null, user) }
      }
    )
  }
))
