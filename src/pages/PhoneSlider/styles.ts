import styled from "styled-components";

export const PhoneComponent = styled.section`
  padding: 0 0.5rem;

  hr {
    width: 5%;
    height: 5px;
    border: none;
    background: ${(props) => props.theme.primary};
    border-radius: 15px;
  }
`;
