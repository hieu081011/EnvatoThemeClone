export default (productState = { products: [], product: [], isLoading: false }, action) => {
    switch (action.type) {
        case 'START LOADING':
            return {
                ...productState,
                isLoading: true,
            }
        case 'END LOADING':
            return {
                ...productState,
                isLoading: false,
            }
        case 'FETCH_PRODUCT':
            return {
                ...productState,
                product: action.payload

            }
        case 'FETCH_ALL_DISPLAY':
            return {
                ...productState,
                products: action.payload.data,
                numberOfPages: action.payload.numberOfPages,
            }
        case 'CREATE':
            return { ...productState, products: action.payload.products }
        case 'UPDATE':
            return { ...productState, products: productState.products.map((product) => (product._id === action.payload._id ? action.payload : product)) }

        case 'DELETE':
            return { ...productState, products: productState.products.filter((product) => (product._id !== action.payload)) }
        default:
            return productState
    }
}