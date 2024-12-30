import './App.css'
import {Home} from './pages/Home'
import {About} from './pages/About'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
