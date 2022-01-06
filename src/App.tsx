import React, { FC, useState, useEffect } from 'react';
import { Card, Button } from '@shopify/polaris';
import ReactCardFlip from 'react-card-flip';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchPosts } from './store/postSlice';

const App: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="p-5 app">
      <h1 className="text-center text-5xl">SPACESTAGRAM</h1>
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
