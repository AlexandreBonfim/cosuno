import { Company } from './companies.types'
import { getCompanies } from './companies.store'

const getMany = (): Company[] => {
    return getCompanies()
  }

const getFilterByName = (term: string): Company[] => {
  const companies: Company[] = getCompanies().filter(x => x.companyName.toLowerCase().match(term))
  
  return companies
}

const getFilterBySpecialty = (terms: string[]): Company[] => {
  if (!terms) throw new Error('Missing search terms')

  const companies = getCompanies().filter(company => company.specialties.some(spe => terms.includes(spe)))

  return companies
}

const getSpecialties = (): string[] => {
  const uniqueSpecialities : string[] = []
  const companies = getCompanies()
  
  companies.forEach(({specialties}) => {
    specialties.forEach(item => {
      let existItem = uniqueSpecialities.some(specialty => specialty === item)
      
      if(!existItem) uniqueSpecialities.push(item)  
    })
  })
  
  return uniqueSpecialities; 
}

export { getMany, getSpecialties, getFilterByName, getFilterBySpecialty }