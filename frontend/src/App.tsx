import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global'
import { CompanyProvider } from './CompaniesContext';

export function App() {
  return (
    <CompanyProvider>      
      <Header />
      <Dashboard />
      <GlobalStyle />
    </CompanyProvider>
  );
}