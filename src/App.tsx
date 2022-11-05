import React, { useState, FunctionComponent } from 'react';
import MainContainer from './components/Containers/MainContainer';
import StyledTextInput from './components/Inputs/StyledTextInput';
import BigText from './components/Texts/BigText';
import RegularText from './components/Texts/RegularText';
import SmallText from './components/Texts/SmallText';

const App: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <MainContainer>
      <BigText>Big Text Here!</BigText>
      <RegularText>Regular Text Here!</RegularText>
      <SmallText style={{ marginBottom: 20 }}>Small Text Here!</SmallText>

      <StyledTextInput
        label="Email Address"
        icon="email-variant"
        value={email}
        onChangeText={setEmail}
        placeholder="email@eamil.com"
        keyboardType="email-address"
        style={{ marginBottom: 20 }}
      />
      <StyledTextInput
        label="Password"
        icon="account"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        isPassword={true}
        style={{ marginBottom: 20 }}
      />
    </MainContainer>
  );
};

export default App;
