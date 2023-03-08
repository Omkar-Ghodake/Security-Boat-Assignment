import './styles/App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import ContacUs from './pages/ContactUs'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="py-10 bg-zinc-100 min-h-screen">
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/products' element={ <Products /> } />
            <Route path='/aboutus' element={ <AboutUs /> } />
            <Route path='/contactus' element={ <ContacUs /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <Signup /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
