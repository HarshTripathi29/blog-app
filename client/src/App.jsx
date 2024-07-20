import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import IndexPage from './IndexPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<IndexPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
