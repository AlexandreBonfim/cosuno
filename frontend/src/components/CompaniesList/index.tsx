import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface Company { 
  guid: string,
  city: string,
  companyName: string,
  logo: string,
  specialties: Array<string>
}

export function CompaniesList() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    api.get('all')
    .then(response => setCompanies(response.data))
  },[])


    return (
        <Container>
          <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Company Name</th>
                  <th>City</th>
                  <th>Specialties</th>
                </tr>
              </thead>

              <tbody>
                 {
                   companies.map(company => (
                      <tr key={company.guid}>
                        <td><img src={ company.logo } alt="company logo" /></td>
                        <td>{company.companyName}</td>
                        <td>{company.city}</td>
                        <td>{company.specialties}</td>
                      </tr>
                   ))
                 }
              </tbody>
          </table>
        </Container>
    )
}
