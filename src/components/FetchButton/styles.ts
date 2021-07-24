import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.2rem;

  margin: 1.5rem;
  padding: 1.2rem;

  border-radius: 99999px;
  background-color: red;
  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: darkred;
  }
`;

// export const SearchBar = styled.input`
//   background-color: none;
//   border: none;
//   outline: none;

//   justify-content: center;
//   text-align: center;
// `;
