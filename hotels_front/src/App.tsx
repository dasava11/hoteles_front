import './App.css'

import NavBar from './components/NavBar/NavBAr'
import Home from './components/Home/Home'
import ContactUs from './components/ContactUs/ContactUs'
import Gallery from './components/Gallery/Gallery'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/contact us' element={<ContactUs/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes> 
    </div>
  )
}

export default App
