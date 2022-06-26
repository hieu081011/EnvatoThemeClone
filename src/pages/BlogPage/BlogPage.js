import React, { useState, useEffect } from 'react'
import './style.scss'
import { useSelector } from 'react-redux'
import BlogList from '../../components/Blogs/BlogComponents/BlogList/BlogList'
import BlogSideBar from '../../components/Blogs/BlogComponents/BlogSideBar/BlogSideBar'
import { useLocation, useParams } from 'react-router-dom'

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
const BlogPage = () => {

    const location = useLocation().pathname

    const { id: params } = useParams()
    const [title, setTitle] = useState('')
    useEffect(
        () => {
            if (location.split('/')[2] === 'category')
                setTitle(params)
            else if (location.split('/')[2] === 'search')
                setTitle(`Search "${params}"`)
            else {
                setTitle('')
            }

        }, [location]
    )


    return (
        <>
            <div className='blog-page-container'>
                <h1>{title ? `${title}` : 'Blog'}</h1>
                <div className='blog-page-content'>

                    <BlogList ></BlogList>
                    <BlogSideBar></BlogSideBar>
                </div>
                <LoadingSpinner></LoadingSpinner>
            </div>
        </>
    )

}
export default BlogPage