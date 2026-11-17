const API_URL = "http://localhost:3000/products";

export const getProducts = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Erreur HTTP: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
        throw error;
    }
};

export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error("Erreur HTTP: " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de l'ajout du produit:", error);
        throw error;
    }
};

export async function getProductById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Produit introuvable");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération du produit:", error);
        throw error;
    }
}
// creation du service de suppression
export async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la suppression du produit");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la suppression du produit:", error);
        throw error;
    }
}
