import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { getProductById } from "../services/productService"

function ProductDetailsPage() {
    const { id } = useParams() //useParams permet de récupérer les paramètres dynamiques de l'URL
    const [product, setProduct] = useState(null) //useState: sert à stocker et modifier les données qui font évoluer l'interface, tandis que
    const [error, setError] = useState(null)
    //useEffect:  sert à exécuter du code (des effets de bord) en réaction au rendu ou au changement de certaines variables
    useEffect(() => {
        let ignore = false

        getProductById(id)
            .then((data) => {
                if (!ignore) {
                    setProduct(data)
                    setError(null)
                }
            })
            .catch((err) => {
                console.error(err)
                if (!ignore) {
                    setError("Produit introuvable ou serveur API indisponible.")
                }
            })

        return () => {
            ignore = true
        }
    }, [id])

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
                <Link to="/" className="btn btn-secondary">
                    Retour au catalogue
                </Link>
            </div>
        )
    }

    if (!product) {
        return <p className="container mt-5">Chargement...</p>
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-3">{product.name}</h2>
            <img
                src={product.image}
                alt={product.name}
                width="300"
                className="img-fluid rounded mb-3 d-block mx-auto"
            />
            <p>{product.description}</p>
            <p className="fw-bold text-primary">{product.price} €</p>
            <Link to="/" className="btn btn-secondary">
                Retour au catalogue
            </Link>
        </div>
    )
}

export default ProductDetailsPage
