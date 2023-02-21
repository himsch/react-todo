import React, { useState } from 'react';
import styled from './Footer.module.css';

export default function Footer({ addTodo }) {
  const [form, setForm] = useState(initForm);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(form);
    setForm(initForm);
  };
  return (
    <footer className={styled.footer}>
      <form className={styled.form} onSubmit={handleSubmit}>
        <input
          className={styled.input}
          type="text"
          id="value"
          name="value"
          placeholder="Add Todo"
          value={form.value}
          onChange={handleChange}
        />
        <button className={styled.button}>Add</button>
      </form>
    </footer>
  );
}

const initForm = {
  value: '',
};
