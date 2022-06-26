import React, { useState } from 'react'
import './style.scss'
import BlogDetail from '../../components/Blogs/BlogComponents/BlogDetail/BlogDetail'
import BlogSideBar from '../../components/Blogs/BlogComponents/BlogSideBar/BlogSideBar'
import { useSelector } from 'react-redux'
const BlogDetailPage = () => {
    const { title } = useSelector(state => state.blogState.blog)

    return (
        <>
            <div className='blog-detail-page-container'>
                <h1>{title}</h1>
                <div className='blog-detail-page-content'>
                    <BlogDetail ></BlogDetail>
                    <BlogSideBar></BlogSideBar>
                </div>
            </div>
        </>
    )
}
export default BlogDetailPage