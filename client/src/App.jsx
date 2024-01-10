import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import DetailPage from './pages/DetailPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<AddPage/>} />
          <Route  element={<DetailPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
