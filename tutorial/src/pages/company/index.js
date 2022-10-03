import React from 'react';
import { Link } from 'gatsby';

// url: /company
function CompanyHome() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;
      <Link to="./history">History</Link>
    </div>
  );
}

export default CompanyHome;
