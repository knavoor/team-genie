module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'teamgenie',
    username: process.env.DB_USER || 'teamgenie_db_user',
    password: process.env.DB_PASS || 'teamgenie_db_password',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './teamgenie.sqlite'
    }
  },
  SALT_WORK_FACTOR: 12
}
