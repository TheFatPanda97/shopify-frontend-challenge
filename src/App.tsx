import React, { FC } from 'react';
import { Card, Button } from '@shopify/polaris';

const App: FC = () => (
  <div className="App">
    <header className="test">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>
        Edit
        <code>src/App.tsx</code>
        and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
    <Card sectioned>
      <Button onClick={() => alert('Button clicked!')}>Example button</Button>
    </Card>
  </div>
);

export default App;
