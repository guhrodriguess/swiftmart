import styled from "styled-components";
import { fadeIn } from "../../styles/global";

export const Section = styled.div`
  padding: 0 0.5rem;
  animation: ${fadeIn} 0.6s ease;
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  h3 {
    margin: 1rem 0;

    span {
      color: ${(props) => props.theme.primary};
      border-bottom: 4px solid ${(props) => props.theme.primary};
      text-transform: capitalize;
    }
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 0.5rem;
  margin: 2rem 0;
`;
