import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  position: relative;

  input {
    width: 100%;
    flex-grow: 1;
    padding: 1rem 2rem 1rem 0.8rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.border};
    font-weight: 500;
    border-radius: 15px;

    &:focus {
      outline: 2px solid ${(props) => props.theme.primary};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    background: transparent;
    border: none;
    padding: 0rem 1rem;
    cursor: pointer;
  }
`;
