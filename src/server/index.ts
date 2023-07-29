import express, { Express, Request, Response } from 'express'
// Variables de entorno
import dotenv from 'dotenv'
// Seguridad
import cors  from 'cors'
import helmet from 'helmet'
// TODO HTTPS

import rootRouter from '../routes'

dotenv.config()

export const server: Express = express();

// define server to use /api and use rootRouter from index.ts in routes
// From this point on over: http://localhost:8000/api/...
server.use('/api', rootRouter)

// TODO: Mongoose Connection

// Security Config
server.use(helmet())
server.use(cors())

// Content Type: 
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({limit: '50mb'}))

// Redirections
// http:localhost:8000/ --> http:localhost:8000/api
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})