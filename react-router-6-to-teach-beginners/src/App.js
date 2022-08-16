import './App.css'
import Wrapper from './ui/Wrapper';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
// Routes to be able to use Route
// Route for routing
// Link works like a but it does not refresh the page, instead it works like spa (single page app)

const App = () => {
  return (
    <Wrapper>
      <header>
         {/* just backslash for home page */}
         <Link to='/'> Home </Link>
         {/* to is equal to about page to be able to path on it later */}
         <Link to='./about'> About </Link>
         {/* to is equal to News page to be able to path on it later */}
         <Link to='./news'> News </Link>
      </header>

      <section>
        <Routes>
         <Route path='/' element={ <Home/> } />
         <Route path='/about' element={<About />} />
         <Route path='/news' element={<News />} />
        </Routes>
      </section>
    </Wrapper>
  )
}

export default App