import { Actions } from "./Actions";

export const UpdateCategories = (categories) => {
    return {
        type: Actions.UPDATE_CATEGORIES,
        payload: categories
    };
};

export default function CategoriesReducer(categories = [], { type, payload }) {
    switch (type) {
        case Actions.UPDATE_CATEGORIES:
            return [...payload];
        default: 
            return categories; 
    }
};