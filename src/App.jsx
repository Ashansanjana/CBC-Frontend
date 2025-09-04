import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from '../pages/home.jsx'
import Login from '../pages/login.jsx'
import Register from '../pages/registerPage.jsx'
import './App.css'
import AdminPage from '../pages/adminPage.jsx'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <BrowserRouter> 
    <div>
      <Toaster position='top-right' />
      <Routes path='/*'>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<div>404 Not Found</div>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
