export const getProduct = async () => {
    try {
        const raw = await fetch("https://api.escuelajs.co/api/v1/products");
        const product = await raw.json();
        return product;
    } catch (err) {
        console.log(err);
    }
};
