import { Search } from '../Search'
import { CompaniesList } from '../CompaniesList'

import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
          <Search />
          <CompaniesList />
        </Container>
    )
}
