export const getProduct = async () => {
    try {
        const raw = await fetch("https://api.escuelajs.co/api/v1/products");
        const product = await raw.json();
        const filterProduct = product.filter(
            (item) => item.description.length > 25
        );

        return filterProduct;
    } catch (err) {
        console.log(err);
    }
};
