import React from 'react';
import './styles/style.scss';
import Navbar from './components/Navbar';
import Banner from './sections/Banner';
import Projects from './sections/Projects';

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Projects />
    </>
  );
}
