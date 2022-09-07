import styled from 'styled-components';
import React, { useCallback, useState, useEffect } from 'react';
import { Task } from '../../models/TodoList';
import { TodoItem } from './TodoItem';
import { AddTodoForm } from './AddTodoForm';

// TODO Putting socket connection and data exchange in a component file is poor architecture. Should be fixed, when state management like redux/mobx lib will be added.
import { io } from 'socket.io-client';
import { ConnectionStatus } from './ConnectionStatus';
const socket = io('http://localhost:3003');
socket.connect();

interface Props {}

export const TodoList: React.FC<Props> = () => {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const handleConnect = () => setConnected(true);
    const handleDisconnect = () => setConnected(false);
    if (socket.connected) handleConnect();
    socket.on('disconnect', handleDisconnect);
    socket.on('connect', handleConnect);
    socket.on('receive_todo_list', (tasksV2) => {
      setTasks(tasksV2);
    });
  }, []);

  const [tasks, setTasks] = useState<Task[]>([]);

  // as a rule of thumb useCallback should wrap
  // all callback functions passed to children to avoid unnecessary rerenders
  const handleSetTasks = useCallback((tasksV2: Task[]) => {
    socket.emit('send_todo_list', tasksV2);
  }, []);

  const addTask = useCallback(
    (name: string) => {
      const id = new Date().getTime(); // TODO for one task list that's enough, but improved id gen might be needed later
      handleSetTasks([...tasks, { id, name, isDone: false }]);
    },
    [tasks, handleSetTasks]
  );

  // index is unreliable. need to use a proper id
  const toggleTaskComplete = useCallback(
    (id: number) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].isDone = !updatedTasks[taskIndex].isDone;
      handleSetTasks(updatedTasks);
    },
    [tasks, handleSetTasks]
  );

  // index is unreliable. need to use a proper id
  const deleteTask = useCallback(
    (id: number) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      // delete from array can be done in multiple ways, but performance doesn't matter in our case
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskIndex, 1);
      handleSetTasks(updatedTasks);
    },
    [tasks, handleSetTasks]
  );

  // id is needed for react list key in case when list items might be deleted or reordered
  return (
    <>
      <ConnectionStatus connected={connected}></ConnectionStatus>
      <AddTodoForm addTask={addTask}></AddTodoForm>
      <StyledTodoList>
        {tasks.map((task) => (
          <TodoItem
            task={task}
            key={task.id}
            toggleTaskComplete={toggleTaskComplete}
            deleteTask={deleteTask}
          ></TodoItem>
        ))}
      </StyledTodoList>
    </>
  );
};

const StyledTodoList = styled.div`
  background-color: white;
  color: black;
  border: 1px;
`;
