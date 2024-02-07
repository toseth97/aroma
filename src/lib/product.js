export const getProduct = async () => {
    try {
        const raw = await fetch("https://fakestoreapi.com/products");
        const product = await raw.json();
        return product;
    } catch (err) {
        console.log(err);
    }
};
