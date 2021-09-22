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
  console.log(terms)
  if (terms.length <= 0) throw new Error('Missing search terms')

  const companies = getCompanies().filter(company => company.specialties.some(spe => terms.includes(spe)))

  return companies
}

const getSpecialties = (): string[] => {
  const uniqueSpecialties : string[] = []
  const companies = getCompanies()
  
  companies.forEach(({specialties}) => {
    specialties.forEach(item => {
      let existItem = uniqueSpecialties.some(specialty => specialty === item)
      
      if(!existItem) uniqueSpecialties.push(item)  
    })
  })
  
  return uniqueSpecialties; 
}

export { getMany, getSpecialties, getFilterByName, getFilterBySpecialty }