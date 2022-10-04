import React from 'react';
import Layout from '../layouts/Layout/Layout';
import styled from 'styled-components';

export default function About() {
  return (
    <Layout>
      <Wrapper>
        <h1>About</h1>

        <p className="text">
          blablaoblaobalogkwogkowkfg baobaobkaobkao lorem w jfiwjfiwfjw
        </p>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.section`
  color: red;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`;
