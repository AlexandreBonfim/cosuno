import { useContext } from 'react';
import { CompaniesContext } from '../../CompaniesContext';
import { Container } from './styles'

export function CompaniesList() {
  const { companies } = useContext(CompaniesContext);

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
                        <td>{company.specialties.join(', ')}</td>
                      </tr>
                   ))
                 }
              </tbody>
          </table>
        </Container>
    )
}
