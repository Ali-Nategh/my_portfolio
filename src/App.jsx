import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="contact" index element={<Contact />} />
          <Route path="work" index element={<Work />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
