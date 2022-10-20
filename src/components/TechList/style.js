import styled from "styled-components";

export const ThechListContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    border-radius: 0.3rem;

  background-color: #212529;
  gap: 1rem;
  li{
    
    background-color: rgba(18, 18, 20, 1);
    margin: 1.2rem 0;
    width: 90%;
    display: flex;
    align-items: center;
    height: 4rem;
    border-radius: 0.5rem;
    padding: 0 18px;
    justify-content: space-between;

  }
`;

