import { Company } from './companies.types'
import { getCompanies } from './companies.store'

const getMany = (): Company[] => {
    return getCompanies();
  }
  
  export { getMany }