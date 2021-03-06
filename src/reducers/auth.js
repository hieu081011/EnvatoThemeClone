const authReducer = (state = { authData: null, cart: {}, errors: null }, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data, loading: false, errors: null };
        case "SET ERROR":
            return { ...state, errors: action.data }
        case "LOG OUT":
            localStorage.clear();

            return { ...state, cart: {}, authData: null, loading: false, errors: null };
        case "UPDATE CART":
            return { ...state, cart: action.payload }
        case "CHANGE QTY CART":

            return { ...state, cart: { ...state.cart, items: state.cart.items.map((obj) => (obj.productId === action.payload.id ? { ...obj, qty: action.payload.qty } : obj)) } }
        default:
            return state;
    }
};

export default authReducer;