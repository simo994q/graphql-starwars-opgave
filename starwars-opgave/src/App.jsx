import './globals.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


import { MainLayout } from './Layout/MainLayout/MainLayout'
import { AllFilms } from './Pages/AllFilms/AllFilms'
import { AllCharacters } from './Pages/AllCharacters/AllCharacters'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<AllFilms />} />
              <Route path='/characters' element={<AllCharacters />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
