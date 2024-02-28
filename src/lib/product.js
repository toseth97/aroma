export const getProduct = async () => {
    try {
        const raw = await fetch("https://dummyjson.com/products");
        const product = await raw.json();
        // const filterProduct = product.filter(
        //     (item) =>
        //         item.images[0] === "'[\"https://placeimg.com/640/480/any\"]'"
        // );
        // console.log(filterProduct);

        return product.products;
    } catch (err) {
        console.log(err);
    }
};
