import React from 'react';
import Layout from './../layouts/Layout/Layout';

function ErrorPage() {
  return (
    <Layout>
      {/* <SEO title="Error" /> */}
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  );
}

export default ErrorPage;
