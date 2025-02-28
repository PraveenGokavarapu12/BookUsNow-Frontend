import React from 'react'
import { lazy,Suspense } from 'react'


import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
const Home=lazy(()=>import('./components/Home'))
const Login=lazy(()=>import('./components/Login'))
const Signup=lazy(()=>import('./components/Signup'))
const PrivateRoute=lazy(()=>import('./components/ProtectedRoute.js'))

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        

        <Route element={<PrivateRoute/>}>
        <Route path='/home' element={<Home/>}/>
        </Route>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Suspense>
    
      </BrowserRouter>
      
 

    </div>
    
  )
}

export default App
