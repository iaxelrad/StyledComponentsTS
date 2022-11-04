import React, { FC, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { data, Todo } from '../../data';
import { Container, List, TodoContainer } from './styles';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const toggleCompleted = (id: number) => {
    setTodos(prev =>
      prev.map(val =>
        val.id === id ? { ...val, completed: !val.completed } : val,
      ),
    );
  };

  const renderItem = ({ item }: { item: Todo }) => {
    return (
      <TodoContainer
        onPress={() => toggleCompleted(item.id)}
        completed={item.completed}>
        <Text>{item.title}</Text>
      </TodoContainer>
    );
  };

  return (
    <Container>
      <SafeAreaView />
      <List data={todos} renderItem={renderItem} />
    </Container>
  );
};
