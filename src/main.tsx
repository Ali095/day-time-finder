import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import DayTimeFinder from './modules/DayTimeFinder'
import './styles/root.css'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Main module like home module for application */}
    <DayTimeFinder />
    {/* Toast container so that our toasts messages can be displayes from anywhere in the app */}
    <ToastContainer />
  </React.StrictMode>,
)
