import React, { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const onAnimationIteration = (event) => {
    setCount(count + 1);
  };

  return (
    <div className="basic-app">
      <h1 className="basic-app-title">{process.env.APP_NAME}</h1>
      <div className="basic-app-favicon flex-center" data-count={count}>
        <img
          src="favicon.ico"
          alt="favicon"
          onAnimationIteration={onAnimationIteration}
        />
      </div>
    </div>
  );
};
