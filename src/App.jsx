import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {Home,About,Contact,Faculty,Student,Misc, NotFound} from './pages/index.js';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/faculty' element={<Faculty/>} />
          <Route path='/Student' element={<Student/>} />
          <Route path='/Misc' element={<Misc/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App