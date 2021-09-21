import express, { Router, Request, Response, NextFunction } from 'express'
import { getMany } from './companies.service'

const routes: Router = express.Router()

routes.get('/all', (req: Request, res: Response, next: NextFunction) => {
  res.json(getMany())
})

export default routes
