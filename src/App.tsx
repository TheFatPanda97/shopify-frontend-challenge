import React, { FC, useState } from 'react';
import { Card, Button } from '@shopify/polaris';
import ReactCardFlip from 'react-card-flip';

const App: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="App">
      <header className="test">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ReactCardFlip isFlipped={isFlipped}>
        <Card sectioned>
          <Button onClick={() => setIsFlipped(!isFlipped)}>Example button</Button>
        </Card>

        <Card sectioned>
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
          <Button onClick={() => setIsFlipped(!isFlipped)}>Example button</Button>
        </Card>
      </ReactCardFlip>
      <Card sectioned>
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        asdiuAShdiluagsfyasjfuasuldfuyajsfasdfila sdfasDada sd asD asdasDasdasD
        <Button onClick={() => setIsFlipped(!isFlipped)}>Example button</Button>
      </Card>
    </div>
  );
};

export default App;
