
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddItem from './pages/AddItem'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'

function App() {


  return (
    <>
    <Routes>
<Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>   
      <Route path='add' element={<AddItem/>}/> 
      <Route path='edit' element={<Edit/>}/> 
      <Route path='login' element={<Login/>}/> 
      <Route path='register' element={<Register/>}/> 
     

       </Routes>
    </>
  )
}

export default App
