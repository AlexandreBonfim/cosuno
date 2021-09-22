import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem 2rem;
    width: 80%;
    height: 10rem;
    flex-wrap: wrap;
`

export const SearchField = styled.input`
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--white);
    color: var(--text-body);
    width: 30rem;
`

export const Checkbox = styled.input`
    margin: 0.25rem 1rem;
`
