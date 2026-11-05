import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Campaign from './pages/Campaign/Campaign'
import Product from './pages/Product/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/produtos" element={<Product />} />
          <Route path="/campanha/:slug" element={<Campaign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App