const path = require('path')
const env = require('dotenv')

const development = process.env.NODE_ENV === 'development'
if (development) {
  env.config({ path: path.join(__dirname, '../../.env.development.local') })
  env.config({ path: path.join(__dirname, '../../.env.development') })
} else if (process.env.NODE_ENV === 'test') {
  env.config({ path: path.join(__dirname, '../../.env.test.local') })
  env.config({ path: path.join(__dirname, '../../.env.test') })
} else if (process.env.NODE_ENV === 'production') {
  env.config({ path: path.join(__dirname, '../../.env.production.local') })
  env.config({ path: path.join(__dirname, '../../.env.production') })
}
env.config({ path: path.join(__dirname, '../../.env.local') })
env.config({ path: path.join(__dirname, '../../.env') })


const config = {
  protocol: process.env.VUE_APP_PROTOCOL || 'http',
  port: process.env.VUE_APP_PORT || 3000,
  host: process.env.VUE_APP_HOST || 'localhost',


  sessionMaxAge: 1000 * 3600 * 24, // 24 hours

  secret: process.env.SECRET,

  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
}
config.server = `${config.protocol}://${config.host}:${config.port}`
config.origin = development ? 'http://localhost:8080' : process.env.VUE_APP_ORIGIN

module.exports = config
