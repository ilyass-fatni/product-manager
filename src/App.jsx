import { Routes, Route, Navigate } from 'react-router'
import ProductPage from './Pages/ProductPage'
import AddProductPage from './Pages/AddProductPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/products/add" element={<AddProductPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
