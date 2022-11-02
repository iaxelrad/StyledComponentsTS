import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const App: FC = () => {
  return (
    <Container>
      <Text>React Native Styled Components TS Tutorial</Text>
    </Container>
  );
};

export default App;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
