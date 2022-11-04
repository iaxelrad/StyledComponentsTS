export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const data: Todo[] = [
  { id: 1, title: 'Learn Styled Components', completed: false },
  { id: 2, title: 'Make A Lecture About It', completed: true },
  { id: 3, title: 'Get Feedback From my Peers', completed: false },
  { id: 4, title: 'Share the Knowledge', completed: false },
];
