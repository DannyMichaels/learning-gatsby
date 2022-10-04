import React from 'react';
import Layout from '../layouts/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import FetchDataExample from '../examples/fetchData';

export default function Home() {
  return (
    <Layout>
      {/* <SEO title="Home " /> */}
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <FetchDataExample />

        {/* <AllRecipes /> */}
      </main>
    </Layout>
  );
}
