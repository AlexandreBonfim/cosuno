import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --danger: #e52e4d;
        --primary: #2451b2;
        --white: #ffffff;
        
        --primary-darker: #003884;
        
        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        // accessibility
        // font-size (desktop) = 16px
        @media (min-width: 1080px) { 
            font-size: 93.75%; // 15px
        }

        @media (min-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // keep same font effect in all browsers.
    }
    
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed; // inform user
    }
`