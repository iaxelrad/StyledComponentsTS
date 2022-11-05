import styled from 'styled-components/native';
import { CustomThemeProps } from '../constants/theme';
export const StyledThemeContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 30px 0;
`;
export const StyledSwitchWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;
export const StyledToggleText = styled.Text<CustomThemeProps>`
  color: ${props => props.theme.text};
  font-size: 20px;
`;
