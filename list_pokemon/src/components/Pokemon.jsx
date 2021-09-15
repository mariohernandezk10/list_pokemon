import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 40px;
  border: 5px outset pink;
  &:hover {
   background-color: yellow;
 }
`;

const Title = styled.p`
  font-size: 15px;
  text-align: center;
`;

const Pokemon = () => (
  <Div>
    <Title>Pokemon</Title>
  </Div>
);

export default Pokemon;