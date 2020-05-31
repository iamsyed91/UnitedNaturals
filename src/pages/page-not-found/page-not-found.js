import React from 'react';
import './page-not-found.css';
function PageNotFound() {
  return (
    <div className="container">
      <div className="boo-wrapper">
        <div className="boo">
          <div className="face"></div>
        </div>
        <div className="shadow"></div>

        <h1>Sorry!</h1>
        <p>
          We were not able to find the page you
      <br />
      were looking for.
    </p>
      </div>
    </div>
  );
}

export default PageNotFound;
