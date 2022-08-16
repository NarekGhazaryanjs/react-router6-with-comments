import './App.css'
import Wrapper from './ui/Wrapper';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
// Routes acts as a container/parent for all the individual routes that will be created in our app.

// Route is used to create a single route. It takes in two attributes:

// path, which specifies the URL path of the desired component. You can call this pathname whatever you want. Above, you'll notice that the first pathname is a backslash (/). Any component whose pathname is a backslash will get rendered first whenever the app loads for the first time. This implies that the Home component will be the first component to get rendered.
// element, which specifies the component the route should render.
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