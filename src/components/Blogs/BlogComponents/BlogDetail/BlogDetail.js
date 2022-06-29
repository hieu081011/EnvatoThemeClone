import React, { useState, useEffect } from 'react'
import './style.scss'
import { FaClock, FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaPlusSquare, FaAngleDoubleRight } from 'react-icons/fa'
import { AiOutlineFolder, AiOutlineUser } from 'react-icons/ai'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getBlog } from '../../../../actions/blogs'

const BlogDetail = ({ blog }) => {

    // const { blog, isLoading } = useSelector((state) => state.blogState)


    return (
        <>

            <div className='blog-detail-container'>

                <div className='blog-detail-img-container'>

                    <img src={blog.image && `http://localhost:5000/image/blog/${blog.image}.jpg`} />
                    <div className='buttons-container'>
                        <div className='date-tags'>
                            <div className='date'>
                                <span><FaClock /></span>
                                {blog.date}
                            </div>
                            <div className='tags'>
                                <div><span><AiOutlineUser /></span>Codezon Unlimited</div>
                                <div><span ><AiOutlineFolder /></span>{blog.tags?.join(',')}</div>
                            </div>
                        </div>
                        <div className='share-buttons'>
                            <a style={{ color: '#3B5998' }}><FaFacebookSquare /></a>
                            <a style={{ color: '#1DA1F2' }}><FaTwitterSquare /></a>
                            <a style={{ color: '#848484' }}><FaEnvelopeSquare /></a>
                            <a style={{ color: '#FF6550' }}><FaPlusSquare /></a>
                        </div>
                    </div>
                </div>
                <div className='blog-content-container'>
                    {blog.detailContent}
                </div>
            </div>
        </>
    )
}
export default BlogDetail