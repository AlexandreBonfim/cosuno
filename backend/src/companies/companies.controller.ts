import express, { Router, Request, Response, NextFunction } from 'express'
import { getMany, getSpecialties, getFilterByName, getFilterBySpecialty } from './companies.service'

const routes: Router = express.Router()

routes.get('/all', (req: Request, res: Response, next: NextFunction) => {
  res.json(getMany())
})

routes.get('/filter-by-name', (req: Request, res: Response, next: NextFunction) => {
  try {
    const term = req.query.term as string
    res.json(getFilterByName(term))
  } catch (e) {
    next(e)
  }
})

routes.get('/filter-by-specialty', (req: Request, res: Response, next: NextFunction) => {
  try {
    const terms = req.query.terms as string[]
    res.json(getFilterBySpecialty(terms))
  } catch (e) {
    next(e)
  }
})

routes.get('/specialties', (req: Request, res: Response, next: NextFunction) => {
  res.json(getSpecialties())
})

export default routes
