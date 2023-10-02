import styled from "styled-components";

export const ProductComponent = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 2rem auto;
  padding: 0rem 1.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  user-select: none;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
	width: 100%;
	height: 100%;
	max-height: 230px;

  img {
    width: 80%;
    margin: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  position: relative;

  h4 {
    margin: 0.3rem 0 0.6rem 0;
    font-weight: 700;
    color: ${(props) => props.theme.black};
  }

  span {
    margin: 0.3rem 0 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: ${(props) => props.theme.black};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.6rem;
    font-weight: 700;
    border-radius: 50px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${(props) => props.theme.secondary};
    }
  }
`;
