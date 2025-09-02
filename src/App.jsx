import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from '../pages/home.jsx'
import Login from '../pages/login.jsx'
import Signup from '../pages/signup.jsx'
import './App.css'
import AdminPage from '../pages/adminPage.jsx'

function App() {


  return (
    <BrowserRouter> 
    <div>
      <Routes path='/*'>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/*' element={<div>404 Not Found</div>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
