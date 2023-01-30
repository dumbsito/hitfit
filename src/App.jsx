import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from '../components/navbar'
import { Home} from '../pages/Home'
import { About} from '../pages/About'
import { Footer } from '../components/footer'
import { Route, Routes } from 'react-router-dom'
import { Programs } from '../pages/Programs'
import { Facilities } from '../pages/Facilities'
import { Locations } from '../pages/Locations'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <Navbar></Navbar>
  <Home></Home>
  <About></About>
  <Programs></Programs>
  <Facilities></Facilities>
  <Locations></Locations>
  <Footer></Footer>


     {/*<Routes>
        <Route path="/" element={<Navbar/>}>
            <Route path='facilities' element={<Footer/>}></Route>
            <Route path='*' element={<Navbar/>}></Route>
        </Route>
      </Routes>
 */} 
    </div>
 


  )
}

export default App
