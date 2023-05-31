import { ApiError } from "./types/ApiError";
import { CartItem } from "./types/Cart";
import { Product } from "./types/Product";

export const getError = (error: ApiError) => {
    return (
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
    );
}

export const convertProductToCartItem = (product: Product): CartItem => {
    return {
        _id: product._id,
        slug: product.slug,
        image: product.image,
        name: product.name,
        price: product.price,
        countInStock: product.countInStock,
        quantity: 1,
    };
}