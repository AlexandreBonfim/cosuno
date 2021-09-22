import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Company { 
    guid: string,
    city: string,
    companyName: string,
    logo: string,
    specialties: Array<string>
}

interface CompaniesContextProps {
    children: ReactNode
}

interface CompanyContextData {
    companies: Array<Company>,
    filterByName: (term: string) => void
    filterBySpecialty: (terms: string[]) => void
}

export const CompaniesContext = createContext<CompanyContextData>({} as CompanyContextData)

export function CompanyProvider({ children }: CompaniesContextProps) {
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        api.get('all')
        .then(response => setCompanies(response.data))
    },[])

    function filterByName(term: string) {
        api.get('filter-by-name', { params: { term: term } })
        .then(response => setCompanies(response.data))
    }

    function filterBySpecialty(terms: string[]) {
        if(terms.length <= 0) return // never call in case of terms empty
        api.get('filter-by-specialty', { params: { terms: terms }})
        .then(response => setCompanies(response.data))
    }

    return (
        <CompaniesContext.Provider value={{companies, filterByName, filterBySpecialty}}>
            {children}
        </CompaniesContext.Provider>
    )
}
  