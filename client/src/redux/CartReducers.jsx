import { Actions } from "./Actions";

export const ToggleCart = () => {
    return {
        type: Actions.TOGGLE_CART
    };
};

export const AddToCart = (product) => {
    return {
        type: Actions.ADD_TO_CART,
        payload: product
    };
};

export const AddMultipleToCart = (products) => {
    return {
        type: Actions.ADD_MULTIPLE_TO_CART,
        payload: products
    };
};

export const RemoveFromCart = (_id) => {
    return {
        type: Actions.REMOVE_FROM_CART,
        payload: _id
    };
};

export const UpdateCartQuantity = (_id, purchaseQuantity) => {
    return {
        type: Actions.UPDATE_CART_QUANTITY,
        payload: { _id, purchaseQuantity }
    };
};

export const ClearCart = () => {
    return {
        type: Actions.CLEAR_CART
    };
};

const initialState = {
    cartOpen: false,
    cart: []
};

export default function CartReducer(cart = initialState, { type, payload }) {
    switch (type) {
        case Actions.TOGGLE_CART:
            return {
                ...cart,
                cartOpen: !cart.cartOpen
            };
        case Actions.ADD_TO_CART:
            return {
                cart: [...cart.cart, payload],
                cartOpen: true
            };
        case Actions.ADD_MULTIPLE_TO_CART:
            return {
                cart: [...cart.cart, payload],
                cartOpen: true
            };
        case Actions.REMOVE_FROM_CART:
            const newCart = cart.cart.filter(product => product._id !== payload)
            return {
                cart: newCart,
                cartOpen: newCart.length > 0
            };
        case Actions.UPDATE_CART_QUANTITY:
            return {
                cart: cart.cart.map(product => {
                    if (product._id === payload._id) {
                        product.purchaseQuantity = payload.purchaseQuantity
                    }
                    return product;
                })
            }
        case Actions.CLEAR_CART:
            return {
                cart: [],
                cartOpen: false
            };
        default:
            return cart;
    }
}