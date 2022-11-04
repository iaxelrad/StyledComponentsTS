import React, { FunctionComponent } from 'react';
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
  ...props
}) => {
  return (
    <InputWrapper>
      <LeftIcon>
        <Icon name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField {...props} placeholderTextColor={gray} style={props.style} />
    </InputWrapper>
  );
};

export default StyledTextInput;
