import * as api from '../api/index.js';

export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log(data)
        dispatch({ type: 'AUTH', data });


    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: 'AUTH', data });


    } catch (error) {
        console.log(error);
    }
};


export const getCart = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getCart(userId);
        console.log(data.cart)
        dispatch({ type: "UPDATE CART", payload: data.cart })
    } catch (error) {
        console.log(error)
    }
}

export const addToCart = (userId, addNumber, productId) => async (dispatch) => {
    try {
        const { data } = await api.addToCart(userId, addNumber, productId)
        dispatch({ type: "UPDATE CART", payload: data.cart })
    } catch (error) {
        console.log(error)
    }
}

export const updateCart = (userId, cart) => async (dispatch) => {
    try {
        const { data } = await api.updateCart(userId, cart)
        dispatch({ type: "UPDATE CART", payload: data.cart })
    } catch (error) {
        console.log(error)
    }
}

export const deleteInCart = (userId, productId) => async (dispatch) => {
    try {
        const { data } = await api.deleteInCart(userId, productId)
        dispatch({ type: "UPDATE CART", payload: data.cart })
    } catch (error) {
        console.log(error)
    }
}
