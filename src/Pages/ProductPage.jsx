import { useState, useEffect } from "react"
import { getProducts } from "../services/productService"
import ProductCard from "../Components/ProductCard"

function ProductPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    getProducts()
      .then((data) => {
        if (!ignore) {
          setProducts(data)
          setError(null)
        }
      })
      .catch(() => {
        if (!ignore) {
          setError(
            "Impossible de charger les produits. Vérifiez que json-server est démarré sur http://localhost:3000."
          )
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false)
        }
      })

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Bonjour sur product manager</h1>

      {loading && <p className="text-muted">Chargement des produits...</p>}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="text-muted">Aucun produit disponible.</p>
      )}

      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
