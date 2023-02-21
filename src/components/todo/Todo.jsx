import React, { useState } from 'react';
import styled from './Todo.module.css';
import { BsTrashFill } from 'react-icons/bs';

export default function Todo({ id, value, isChecked, updateTodo, deleteTodo }) {
  return (
    <li key={id} className={styled.todo}>
      <div>
        <input
          type="checkbox"
          defaultChecked={isChecked}
          onChange={e => {
            updateTodo(id, e.target.checked);
          }}
        />
        {value}
      </div>
      <div>
        <button
          className={styled.button}
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <BsTrashFill />
        </button>
      </div>
    </li>
  );
}
