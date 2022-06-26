import React, { useState, useEffect, Fragment } from 'react'
import './style.scss'

import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../../actions/blogs'


const BlogForm = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)
    const { blogs } = useSelector((state) => state.blogState)
    const [blogData, setBlogData] = useState({
        title: '', listContent: '', detailContent: '', tags: '', image: '', date: ''
    })
    const blog = useSelector((state) => currentId ? state.blogState.blogs.find((blog) => (blog._id === currentId)) : null)
    useEffect(() => {
        if (blog) setBlogData(blog)

    }, [blog])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateBlog(currentId, blogData))
        }
        else {

            dispatch(createBlog(blogData))
        }
        setBlogData({ title: '', listContent: '', detailContent: '', tags: '', image: '', date: '' })
        setCurrentId(null)
    }

    useEffect(() => {
        dispatch(getBlogs('all'));

    }, [dispatch, currentId])
    return (
        <>
            <div className='blog-form-container'>
                <div className='form-container'>
                    <h1>{currentId ? 'Update ' : 'Create '}Blog Form</h1>
                    <h2>Title</h2>
                    <input type='text' onChange={e => setBlogData({ ...blogData, title: e.target.value })} value={blogData.title}></input>
                    <h2>List Content</h2>
                    <input type='text' onChange={e => setBlogData({ ...blogData, listContent: e.target.value })} value={blogData.listContent}></input>
                    <h2>Detail Content</h2>
                    <input type='text' onChange={e => setBlogData({ ...blogData, detailContent: e.target.value })} value={blogData.detailContent}></input>
                    <h2>Tags</h2>
                    <input type='text' onChange={e => setBlogData({ ...blogData, tags: e.target.value.split(',') })} value={blogData.tags}></input>
                    <h2>Created Date</h2>
                    <input type='text' onChange={e => setBlogData({ ...blogData, date: e.target.value })} value={blogData.date}></input>
                    <h2>Image</h2>
                    <input type='text' onChange={e => setBlogData({ ...blogData, image: e.target.value })} value={blogData.image}></input>

                    <button onClick={handleSubmit}>SUBMIT</button>
                </div>

                <div className='blog-list-table'>
                    <div>STT</div>
                    <div>Id</div>
                    <div>Blog Name</div>
                    <div>Tag</div>
                    <div>
                        Actions
                    </div>
                    {blogs?.map((blog, index) => (<Fragment key={blog._id}>
                        <div>{index + 1}</div>
                        <div>{blog._id}</div>
                        <div>{blog.title}</div>
                        <div>{blog.tags && blog.tags?.join(',')}</div>
                        <div>
                            <button
                                onClick={() => {
                                    setCurrentId(blog._id);

                                }

                                }>Update</button>
                            <button
                                onClick={() => {
                                    dispatch(deleteBlog(blog._id))
                                }}
                            >Delete</button>
                        </div>
                    </Fragment>))}
                </div>
            </div>

        </>
    )
}
export default BlogForm