import React, { FunctionComponent } from 'react';
import MainContainer from './components/Containers/MainContainer';
import BigText from './components/Texts/BigText';
import RegularText from './components/Texts/RegularText';
import SmallText from './components/Texts/SmallText';

const App: FunctionComponent = () => {
  return (
    <MainContainer>
      <BigText>Big Text Here!</BigText>
      <RegularText>Regular Text Here!</RegularText>
      <SmallText>Small Text Here!</SmallText>
    </MainContainer>
  );
};

export default App;
