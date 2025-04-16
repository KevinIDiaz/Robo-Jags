import './App.css'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Sponsors} from './pages/Sponsors'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return(
    <Router>
       <ScrollToTop />
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Sponsors" element={<Sponsors/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
