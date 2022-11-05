import { ComponentProps, ReactNode } from 'react';
import { TextInputProps } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export interface ExtraInputProps {
  label: ReactNode;
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  isPassword?: boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;
