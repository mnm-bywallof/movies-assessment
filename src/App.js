import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Wallpaper from './components/wallpaper';
import { useEffect } from 'react';

import Search from './components/SearchPage';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Wallpaper></Wallpaper>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </>
  );
}

export default App;
