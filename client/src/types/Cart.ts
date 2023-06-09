export type CartItem = {
    slug: string;
    image: string | undefined;
    quantity: number;
    price: number;
    countInStock: number;
    name: string;
    _id: string;
};

export type ShippingAddress = {
    fullName: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
  
};

export type Cart = {
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
    cartItems: CartItem[];
    shippingAddress: ShippingAddress;
    paymentMethod: string;
};
