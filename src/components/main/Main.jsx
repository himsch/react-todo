import React, { useEffect, useState } from 'react';
import styled from './Main.module.css';
import Todo from '../todo/Todo';

export default function Main({ todo, updateTodo, deleteTodo }) {
  return (
    <main className={styled.main}>
      <ul style={{ padding: '0' }}>
        {todo &&
          todo.map(t => (
            <Todo
              key={t.id}
              id={t.id}
              value={t.value}
              isChecked={t.isChecked}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </ul>
    </main>
  );
}
