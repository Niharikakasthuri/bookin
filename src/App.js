import React from 'react'
import {Routes,Route} from'react-router-dom'
import Home from './Home'
import Books from './Books'
import Payment from './Payment'
const App = () => {
  return (
    <div>
      <Routes>
      <Route exact path = '/' element = {<Home/>}/>
      <Route exact path='/book' element={<Books/>}/>
      <Route exact path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default App