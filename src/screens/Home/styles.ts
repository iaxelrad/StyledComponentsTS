import styled from 'styled-components/native';
import { theme } from '../../constants';
import { Todo } from '../../data';

interface TodoContainerProps {
  completed: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList<Todo>`
  flex: 1;
  border-color: white;
`;

export const TodoContainer = styled.TouchableOpacity<TodoContainerProps>`
  padding: 10px;
  /* transform: translate(20px); */
  background-color: ${props =>
    props.completed ? theme.colors.accent : 'white'};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.accent};
`;
