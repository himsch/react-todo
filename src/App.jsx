import React, { useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import styled from './App.module.css';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('All');

  const addTodo = ({ value }) => {
    const id = Date.now();
    setTodo(todo => [...todo, { id, value, isChecked: false }]);

    localStorage.setItem(
      'list',
      JSON.stringify([...todo, { id, value, isChecked: false }])
    );
  };

  const updateTodo = (id, isChecked) => {
    setTodo(todo => {
      const result = todo.map(t => {
        if (t.id === id) {
          return { ...t, isChecked };
        }
        return { ...t };
      });
      localStorage.setItem('list', JSON.stringify([...result]));
      return result;
    });
  };

  const deleteTodo = id => {
    console.log(id);
    setTodo(todo => {
      const result = todo.filter(t => t.id !== id);
      localStorage.setItem('list', JSON.stringify([...result]));
      return result;
    });
  };

  const changeStatus = e => {
    setStatus(e.target.textContent);
  };

  useEffect(() => {
    const list = localStorage.getItem('list');
    if (list) {
      const todoList = JSON.parse(list);

      if (status === 'Active') {
        setTodo(todoList.filter(todo => !todo.isChecked));
      } else if (status === 'Completed') {
        setTodo(todoList.filter(todo => todo.isChecked));
      } else {
        setTodo(todoList);
      }
    }
    return () => {};
  }, [status]);

  return (
    <div className={styled.container}>
      <Header changeStatus={changeStatus} />
      <Main todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Footer addTodo={addTodo} />
    </div>
  );
}
