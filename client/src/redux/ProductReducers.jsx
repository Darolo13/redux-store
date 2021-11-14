import { Actions } from "./Actions"

export const UpdateProducts = (products) => {
    return {
        type: Actions.UPDATE_PRODUCTS,
        payload: products
    }
}

export default function ProductReducers(products = [], action){
    const { type, payload } = action; 
    switch (type) {
        case Actions.UPDATE_PRODUCTS:
            return [...payload]
        default: 
            return products
    }
}