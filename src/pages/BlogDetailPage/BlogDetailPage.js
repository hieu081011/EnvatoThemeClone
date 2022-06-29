import React, { useEffect } from 'react'
import './style.scss'
import BlogDetail from '../../components/Blogs/BlogComponents/BlogDetail/BlogDetail'
import BlogSideBar from '../../components/Blogs/BlogComponents/BlogSideBar/BlogSideBar'
import { useSelector, useDispatch } from 'react-redux'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../actions/blogs'
const BlogDetailPage = () => {
    window.scroll(0, 100)

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {

        dispatch(getBlog(id))

    }
        , [dispatch, id])
    const { blog, isLoading } = useSelector(state => state.blogState)
    if (!blog) return (<><ErrorPage /></>)

    return (

        <>
            <div className='blog-detail-page-container'>
                <h1>{blog.title}</h1>
                <div className='blog-detail-page-content'>
                    {isLoading ? <LoadingSpinner /> :
                        <BlogDetail blog={blog} ></BlogDetail>
                    }
                    <BlogSideBar></BlogSideBar>
                </div>
            </div>
        </>
    )
}
export default BlogDetailPage