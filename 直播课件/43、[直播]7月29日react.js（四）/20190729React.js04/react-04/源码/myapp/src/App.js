import React from 'react';

import Child from './Components/Child';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div>
      <h1>App</h1>

      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    </div>
  );
}

export default App;
