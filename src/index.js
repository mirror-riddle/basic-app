import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const App = () => {
  return (
    <div className="basic-app">
      <h2 className="basic-app-title">{process.env.APP_NAME}</h2>
      <img className="basic-app-favicon" src="favicon.ico" alt="favicon" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
