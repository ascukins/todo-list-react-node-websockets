import React, { memo, useState } from 'react';
import styled from 'styled-components';

interface Props {
  addTask: (name: string) => void;
}

export const AddTodoForm: React.FC<Props> = memo(({ addTask }) => {
  const [name, setName] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    addTask(name);
    setName('');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='new-todo-input'>What needs to be done?</label>
      </div>
      <StyledInputDiv>
        <input
          type='text'
          id='new-todo-input'
          name='text'
          autoComplete='off'
          value={name}
          onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </StyledInputDiv>
    </form>
  );
});

const StyledInputDiv = styled.div`
  input {
    width: 215px;
    height: 23px;
    font-size: 16px;
  }
  margin: 10px 0 20px;
  display: flex;
  column-gap: 10px;
  min-width: 310px;
  max-width: 310px;
`;
