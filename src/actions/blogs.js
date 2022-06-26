import * as api from '../api'
export const getBlog = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlog(id);

        dispatch({ type: 'FETCH_BLOG', payload: data })
    } catch (error) {
        console.log(error)
    }

}

export const getBlogs = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs(page);

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }

}
export const getBlogsBySearch = (searchParams) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogsBySearch(searchParams);
        dispatch({ type: 'FETCH_BY_SEARCH', payload: data })


    } catch (error) {
        console.log(error)
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        const { data } = await api.updateBlog(id, blog);

        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id)

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error)
    }
}