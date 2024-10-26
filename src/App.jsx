import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Footer from './components/Footer'


function App() {

  return (
<>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/:id/view' element={<View/>}></Route>
  <Route path='/*' element={<Pnf/>}></Route>


</Routes>
<Footer></Footer>
</>   
  )
}

export default App
