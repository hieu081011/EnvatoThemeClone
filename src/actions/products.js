import * as api from '../api'
export const getProduct = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchProduct(id);
        console.log(data)
        dispatch({ type: 'FETCH_PRODUCT', payload: data })
    } catch (error) {
        console.log(error)
    }

}

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }

}
export const getProductsDisplay = (page, type, sort, perPage, increase, gt, lt) => async (dispatch) => {
    try {
        const { data } = await api.fetchProductsDisplay(page, type, sort, perPage, increase, gt, lt);

        dispatch({ type: 'FETCH_ALL_DISPLAY', payload: data })
    } catch (error) {

    }
}

export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product);

        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id)

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error)
    }
}