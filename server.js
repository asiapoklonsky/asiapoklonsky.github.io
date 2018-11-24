const next = require('next')
const { createServer } = require('http')
const routes = require('./routes')
const port = parseInt(process.env.PORT, 10) || 5335
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(handler).listen(port)
})
