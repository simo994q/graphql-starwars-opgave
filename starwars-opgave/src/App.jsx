import './globals.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from './Layout/MainLayout/MainLayout'
import { AllFilms } from './Pages/AllFilms/AllFilms'
import { AllCharacters } from './Pages/AllCharacters/AllCharacters'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<AllFilms />} />
            <Route path='/characters' element={<AllCharacters />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
