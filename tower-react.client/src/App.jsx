import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import {Login} from "./components/Login.jsx";


export function App() {

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main className='bg-dark'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-11 m-auto'>
              <Outlet />
            </div>
            <div className='col-1'>
              <Login />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-light text-center p-3 ">
        Made with 💖 by CodeWorks
      </footer>

    </div>
  )
}
