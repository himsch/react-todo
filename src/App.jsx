import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import styled from './App.module.css';

export default function App() {
  return (
    <div className={styled.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
