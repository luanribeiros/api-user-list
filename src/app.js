import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import database from './database'
import allowCors from './cors'

const app = express()

const configureExpress = () => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(allowCors)
  app.use('/', routes)
  app.database = database

  return app
}

export default async () => {
  const app = configureExpress()
  await app.database.connect()

  return app
}