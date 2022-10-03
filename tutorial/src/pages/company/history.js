import React from 'react';
import { Link } from 'gatsby';

// url: company/history (nested route)
function History() {
  return (
    <div>
      history&nbsp;
      <Link to="../">Go back</Link>&nbsp;
    </div>
  );
}

export default History;
