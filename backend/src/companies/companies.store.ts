import store from '../../data/companies.json'
import { Company } from './companies.types'

const getCompanies = (): Company[] => store.companies

export { getCompanies }
