import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    background-color: red;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.white};
    font-size: 11px;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
