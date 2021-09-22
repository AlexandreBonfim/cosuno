import { useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CompaniesContext } from '../../CompaniesContext';

import { Container, CheckboxContainer, SearchField, Checkbox } from './styles'

export function Search() {
    // soc: left all changes to company in CompaniesContext
    const { filterBySpecialty, filterByName } = useContext(CompaniesContext);

    const [specialties, setSpecialties] = useState<string[]>([]);
    const [chosenSpecialty, setChosenSpecialty] = useState<string[]>([]);
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
  
    function onChange (e: any) {
        const isChecked = e.target.checked
        const value = e.target.value

        if(isChecked) {
            const temp = [...chosenSpecialty, value];
           
            setChosenSpecialty(temp)
            filterBySpecialty(temp)
        } else {
            const temp = chosenSpecialty.filter(item => item !== value);
            
            setChosenSpecialty(temp)
            filterBySpecialty(temp)
        }
    }

    // update 'term' value after 1 second from the last update of 'debouncedTerm'
    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    useEffect(() => {
        let termLowerCase = term.trim().toLowerCase()
        filterByName(termLowerCase)
        
    },[term]); // @todo: warning

    useEffect(() => {
        api.get('specialties')
        .then(response => setSpecialties(response.data))
    },[])

    // in case all are unchecked populate list again
    useEffect(() => {
       if (chosenSpecialty.length === 0) filterByName('')
    },[chosenSpecialty]) // @todo: warning

    return (
        <Container>
            <SearchField 
                placeholder="Search a company"
                value={debouncedTerm}
                onChange={(e) => setDebouncedTerm(e.target.value)}
            />    
            
            <CheckboxContainer>
            {
                   specialties.map((specialty, index) => (
                    <label>  
                        <Checkbox  
                            type="checkbox"
                            name={specialty}
                            value={specialty} 
                            key={index} //@todo: why complain about key if value is there
                            onClick={onChange.bind(specialty)}
                        />  
                        {specialty}
                    </label>
                   ))
            }
            </CheckboxContainer>
        </Container>
    )
}
