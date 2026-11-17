import { Link } from 'react-router'

function ProductCard({ product }) {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="fw-bold text-primary mt-auto mb-3">{product.price} €</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                        Voir détails
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard