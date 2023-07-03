import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Search from './components/SearchPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import MovieInfo from './components/MovieInfo';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Dashboard/>
  },
  {
    path:'/search',
    element: <Search/>
  },
  {
    path:'/movie',
    element: <MovieInfo/>,
    errorElement: <h1>Opps! Something is up!</h1>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
