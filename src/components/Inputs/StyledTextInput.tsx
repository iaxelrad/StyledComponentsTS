import React, { useState, FunctionComponent } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { InputProps } from './types';
import SmallText from '../Texts/SmallText';
import { colors } from '../colors';
const { primary, secondary, accent, black, gray } = colors;

const InputWrapper = styled.View`
  width: 100%;
`;

const LeftIcon = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  z-index: 1;
  border-right-width: 2px;
  border-color: ${secondary};
  padding-right: 10px;
`;

const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 15px;
  z-index: 1;
`;

const InputField = styled.TextInput`
  background-color: ${primary};
  height: 60px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${secondary};
  margin-vertical: 3px;
  margin-bottom: 10px;
  padding: 15px;
  padding-left: 65px;
  padding-right: 65px;
  font-size: 16px;
  color: ${black};
`;

const StyledTextInput: FunctionComponent<InputProps> = ({
  icon,
  label,
  isPassword,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <InputWrapper>
      <LeftIcon>
        <Icon name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            size={30}
            color={black}
          />
        </RightIcon>
      )}
    </InputWrapper>
  );
};

export default StyledTextInput;
