import React from 'react';
import styled from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styled.footer}>
      <form action="" className={styled.form}>
        <input className={styled.input} type="text" placeholder="Add Todo" />
        <button className={styled.button}>Add</button>
      </form>
    </footer>
  );
}
