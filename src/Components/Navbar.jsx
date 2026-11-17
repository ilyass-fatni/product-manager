import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-semibold">
          Product Manager
        </Link>
        <div className="navbar-nav me-auto">
          <Link to="/products/add" className="nav-link">
            Ajouter un produit
          </Link>
        </div>
      </div>
    </nav>
  )
}