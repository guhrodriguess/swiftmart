import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.gray};
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
`;

export const Image = styled.img`
  width: 70px;
  border-radius: 15px 5px 15px 5px;
`;

export const Content = styled.div`
  padding: 0 35px 0 10px;

  h3 {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${(props) => props.theme.black_opacity};
    margin-bottom: 8px;
  }

  span {
    font-size: 25px;
    font-weight: 600;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    color: ${(props) => props.theme.gray_900};
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.red};
    }
  }
`;
