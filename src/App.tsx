import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoHome } from './components/todo-home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { TodoLogin } from './components/todo-login';
import { TodoRegister } from './components/todo-register';
import { TodoUserDashBoard } from './components/todo-user-dash';
import { TodoAddTask } from './components/todo-add-task';
import { TodoEditTask } from './components/todo-edit-task';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header>
          <h1 className='text-center fw-bold'>TO-DO</h1>
          <p className='text-center fw-bold'>Your Appointments Organizer</p>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<TodoHome />} />
            <Route path='login' element={<TodoLogin />} />
            <Route path='register' element={<TodoRegister />} />
            <Route path='dash/:userid' element={<TodoUserDashBoard />} />
            <Route path='add-task' element={<TodoAddTask />} />
          <Route path='edit-task' element={<TodoEditTask/>}/>
          </Routes>
        </section>
      </BrowserRouter>

    </div>
  );
}

export default App;
