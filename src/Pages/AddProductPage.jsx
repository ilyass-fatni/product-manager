import { useState } from 'react'
import { useNavigate } from 'react-router'
import { addProduct } from '../services/productService'

function AddProductPage() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [available, setAvailable] = useState(true)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)

        const trimmedName = name.trim()
        const trimmedDescription = description.trim()
        const numericPrice = Number(price)

        if (
            !trimmedName ||
            !trimmedDescription ||
            price === '' ||
            Number.isNaN(numericPrice) ||
            numericPrice < 0
        ) {
            setError('Veuillez remplir tous les champs avec un prix valide.')
            return
        }

        setIsSubmitting(true)
        try {
            const newProduct = await addProduct({
                name: trimmedName,
                description: trimmedDescription,
                price: numericPrice,
                available,
                image: 'https://placehold.co/400x250',
            })
            console.log('Produit ajouté :', newProduct)
            navigate('/')
        } catch (err) {
            console.error(err)
            setError(
                "Impossible d'ajouter le produit. Vérifiez que json-server est démarré sur http://localhost:3000."
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h3 className="mb-4">Ajouter un produit</h3>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Nom du produit"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <input
                    type="number"
                    min="0"
                    step="0.01"
                    className="form-control mb-3"
                    placeholder="Prix"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <div className="form-check mb-3">
                    <input
                        id="available"
                        type="checkbox"
                        className="form-check-input"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                    />
                    <label htmlFor="available" className="form-check-label">
                        Produit disponible
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Ajout en cours...' : 'Ajouter le produit'}
                </button>
            </form>
        </div>
    )
}

export default AddProductPage
