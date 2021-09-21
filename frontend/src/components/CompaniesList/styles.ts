import styled from "styled-components"

export const Container = styled.div`
    margin-top: 4rem;

    table { 
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            color: var(--text-title);
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            border-radius: 0.25rem;
            background: var(--white);
            color: var(--text-body);
        }
    }
`

