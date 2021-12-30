import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <Contact />
    </>
  );
}
