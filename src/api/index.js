import axios from 'axios';

const API = axios.create({ baseURL: 'https://evento-clone-project.herokuapp.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchBlog = (id) => API.get(`/blog/${id}`)
export const fetchBlogs = (page) => API.get(`/blog?page=${page}`)
export const fetchBlogsBySearch = (searchParams) => API.get(`/blog/search/${searchParams}`)
export const createBlog = (newBlog) => API.post('/blog', newBlog)
export const updateBlog = (id, updatedBlog) => API.patch(`/blog/${id}`, updatedBlog)
export const deleteBlog = (id) => API.delete(`/blog/${id}`)


export const fetchProduct = (id) => API.get(`/product/${id}`)
export const fetchProducts = () => API.get('/product')
export const fetchProductsDisplay = (page, type, sort, perPage, increase, gt, lt, searchQuery) => API.get(`/product?page=${page}&type=${type}&sort=${sort}&perPage=${perPage}&increase=${increase}&lt=${lt}&gt=${gt}&search=${searchQuery}`)
export const createProduct = (newProduct) => API.post('/product', newProduct)
export const updateProduct = (id, updatedProduct) => API.patch(`/product/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/product/${id}`)

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const getCart = (userId) => API.get(`/user/cart/${userId}`)
export const addToCart = (userId, addNumber, productId) => API.post('/user/add-to-cart', { userId, addNumber, productId })
export const updateCart = (userId, cart) => API.post('/user/update-cart', { userId, cart })
export const deleteInCart = (userId, productId) => API.post('/user/delete-cart', { userId, productId })

