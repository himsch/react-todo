import React from 'react';
import styled from './Todo.module.css';
import { BsTrashFill } from 'react-icons/bs';

export default function Todo({ value, isChecked }) {
  return (
    <li className={styled.todo}>
      <div>
        <input type="checkbox" />
        {value}
      </div>
      <div>
        <button className={styled.button}>
          <BsTrashFill />
        </button>
      </div>
    </li>
  );
}
