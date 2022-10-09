import styled from "styled-components";

export const GlobalStyle = styled.div`  
  root: {
    --primary-color: #FF577F;
    --secondary-color: ##FF427F;
    --color-primary-negative: #59323F;

    //gray scale

    --color-gray-4: #121214;
    --color-gray-3: #212529;
    --color-gray-2: #343B41;
    --color-gray-1: #868E96;
    --color-gray-0: #F8F9FA;

    //toast collor

    --color-toast-success: #3FE864;
    --color-toast-error: #E83F5B;

    //font

    --font-family: "Inter", sans-serif;

    //font size

 
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;

    //font weight

  
    --font-weight-regular: 700;


    //border radius

    --border-radius: 0.5rem;
      

    //box shadow

    --box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    //transition

    --transition: 0.3s ease-in-out;

    //z-index

    --z-index-modal: 1000;
    --z-index-toast: 1000;
    --z-index-fixed: 1000;


    //breakpoints

    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;

    //spacing

    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 1rem;

    //line height

    --line-height: 1.5;
    
  }

*, *::after, *::before { margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box; }
      
body,html{
  width: 100vw;
  height: 100vh;
  }


body {
  font-family: var(--font-family);
  font-size: var(--font-size-md);
  line-height: var(--line-height);
  color: var(--color-gray-0);
  background-color: var(--color-gray-4);
  overflow-x: hidden;
  }

::-webkit-scrollbar {
  width: 10px;
  }
a {
  color: inherit;
  text-decoration: none;
  }

ul {
  list-style: none;
  }

  button {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height);
    color: var(--color-gray-0);
    background-color: var(--color-gray-3);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
  }

  button:hover {
    background-color: var(--color-gray-2);
  }

  button:active {
    background-color: var(--color-gray-1);
  }

  button:focus {
    outline: none;
  }

  button:disabled {
    background-color: var(--color-gray-1);
    cursor: not-allowed;
  }

  input {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height);
    color: var(--color-gray-0);

    background-color: var(--color-gray-3);
    border: none; 
    border-radius: var(--border-radius);
    padding: var(--spacing-2);
    transition: var(--transition);
  }

  input:focus {
    outline: none;
    border: 1px solid var(--color-gray-0);
    color: var(--color-gray-0);
  }

  input::placeholder {
      color: var(--color-gray-0);
  }

  input:disabled {
    background-color: var(--color-gray-1);
    cursor: not-allowed;
  }

  textarea {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height);
    color: var(--color-gray-0);

    background-color: var(--color-gray-3);
    border: none;
    border-radius: var(--border-radius);
    padding: var(--spacing-2);
    transition: var(--transition);
  }
  `






