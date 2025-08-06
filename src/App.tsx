import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Profile from './pages/Porfile.tsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
        </Route> 
      </Routes>

    </>
  )
}

export default App
