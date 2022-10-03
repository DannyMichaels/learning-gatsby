import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Welcome home</h1>
      <Link to="/about">About</Link>&nbsp;
      <Link to="/company">Company</Link>
    </Layout>
  );
}
