import React from 'react';
import styled from './Header.module.css';
import { HiSun } from 'react-icons/hi';

export default function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.theme}>
        <button className={styled.toggle}>
          <HiSun />
        </button>
      </div>
      <div className={styled.state}>
        <button className={styled.button}>All</button>
        <button className={styled.button}>Active</button>
        <button className={styled.button}>Completed</button>
      </div>
    </header>
  );
}
