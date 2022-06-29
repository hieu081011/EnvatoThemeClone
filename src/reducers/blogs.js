
export default (blogState = { blogs: [], blog: [], isLoading: false }, action) => {
    switch (action.type) {
        case 'START LOADING':
            return {
                ...blogState,
                isLoading: true,
            }
        case 'END LOADING':
            return {
                ...blogState,
                isLoading: false,
            }
        case 'FETCH_BLOG':
            return {
                ...blogState,
                blog: action.payload,
            }
        case 'FETCH_ALL':
            return {
                ...blogState,
                blogs: action.payload.data,
                numberOfPages: action.payload.numberOfPages,
            };
        case 'FETCH_BY_SEARCH':

            return {
                ...blogState,
                blogs: action.payload,
            }
        case 'CREATE':
            return { ...blogState, blogs: action.payload.blogs }
        case 'UPDATE':
            return { ...blogState, blogs: blogState.blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog)) }

        case 'DELETE':
            return { ...blogState, blogs: blogState.blogs.filter((blog) => (blog._id !== action.payload)) }

        default:
            return blogState
    }
}