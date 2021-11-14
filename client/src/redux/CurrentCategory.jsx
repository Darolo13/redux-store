import { Actions } from "./Actions";

export const SetCurrentCategory = (category) => {
    return {
        type: Actions.UPDATE_CURRENT_CATEGORY,
        payload: category
    };
};

export default function CurrentCategoryReducer(currentCategory = '', { type, payload }) {
    switch(type) {
        case Actions.UPDATE_CURRENT_CATEGORY:
            return payload;
        default:
            return currentCategory; 
    }
};