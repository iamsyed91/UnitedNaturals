import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Dr Jeff Brand Checkout_052820';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
