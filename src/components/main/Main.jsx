import React, { useEffect, useState } from 'react';
import styled from './Main.module.css';
import Todo from '../todo/Todo';

export default function Main() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem('list');
    if (list) {
      console.log(list);
      setTodo(JSON.parse(list));
    }

    return () => {};
  }, []);

  console.log(todo);

  return (
    <main className={styled.main}>
      <ul style={{ padding: '0' }}>
        {todo &&
          todo.map(t => <Todo value={t.value} isChecked={t.isChecked} />)}
      </ul>
    </main>
  );
}
