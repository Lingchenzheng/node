const session = require('./session')
const uploads = require('./upload')

module.exports = (app) => {
	app.use(session)
	app.use(uploads)
}
