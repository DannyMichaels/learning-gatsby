import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout/Layout';
import * as classes from '../styles/home.module.css';
import { StyledButton } from '../styles/button';

export default function Home() {
  return (
    <Layout>
      <div className={classes.page}>
        <StyledButton>Click me</StyledButton>
        <h1 className={classes.header}>Welcome home</h1>
        <h1>this should be blueviolet</h1>
        <p className={classes.text}>
          this should be a blue and capitalized paragraph :D
        </p>
        <Link to="/about">About</Link>&nbsp;
        <Link to="/company">Company</Link>
      </div>
    </Layout>
  );
}
