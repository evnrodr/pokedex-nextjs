import NextImage from "next/image";
import styled from "styled-components";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: inline-block;

  width: 20rem;

  border-radius: 15px;

  padding: 0.8rem;

  text-align: center;
  background-color: ${(props) => (props.color ? colors[props.color] : "#fff")};
  box-shadow: 0 0 10px
    ${(props) => (props.color ? colors[props.color] : "#fff")};

  transition: 0.2s;

  &:hover {
    transform: scale(105%);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  margin-bottom: 1.2rem;

  h1 {
    text-transform: capitalize;

    font-size: 1.2rem;
    background-color: white;
    padding: 0.5rem;
    border-radius: 99px;
  }
`;

export const Badge = styled(NextImage)``;

export const Image = styled.img`
  width: 12rem;
`;
