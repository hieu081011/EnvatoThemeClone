import React, { useEffect } from 'react'
import './style.scss'
import { FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaPlusSquare, FaAngleDoubleRight, FaTag } from 'react-icons/fa'
import { AiOutlineFolder, AiOutlineUser, AiFillTag } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { getBlogs } from '../../../../actions/blogs'
import Paginate from '../../../Paginate/Paginate'
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const BlogList = () => {

    const query = useQuery()
    const dispatch = useDispatch()
    const page = query.get('page') || 1;
    const { blogs } = useSelector((state) => state.blogState)
    const { id: search } = useParams()
    console.log(search)
    const location = useLocation().pathname
    useEffect(() => {
        if (page && location == '/blogs') dispatch(getBlogs(page))

    }, [page, location])

    console.log(blogs)

    return (
        <>
            <div className='blogList-container'>
                {blogs && blogs.map((blog) => (

                    <div className='blog-container' key={blog._id}>
                        <div className='blog-img-container' >
                            <Link to={`/blogs/${blog._id}`}>
                                <img src={`http://localhost:5000/image/blog/${blog.image}.jpg`} />
                            </Link>

                        </div>
                        <div className='blog-content-container'>
                            <div className='blog-date'>{blog.date}</div>
                            <Link className='blog-title' to={`/blogs/${blog._id}`}>{blog.title}</Link>

                            <div className='blog-tags-container'>
                                <div><span><AiOutlineUser /></span>Codezon Unlimited</div>
                                <div><span ><AiOutlineFolder /></span>{blog.tags[0]}</div>
                                {blog.tags[1] ? <div><span><AiFillTag /></span>{blog.tags.slice(1,).join(',')}</div> : null}

                            </div>
                            <p className='blog-description'>

                                {blog.listContent}
                            </p>
                            <div className='blog-share'>
                                <Link to={`/blogs/${blog._id}`}>
                                    <button>Read More <span><FaAngleDoubleRight /></span></button>
                                </Link>

                                <div className='shareButtons'>
                                    <a style={{ color: '#3B5998' }}><FaFacebookSquare /></a>
                                    <a style={{ color: '#1DA1F2' }}><FaTwitterSquare /></a>
                                    <a style={{ color: '#848484' }}><FaEnvelopeSquare /></a>
                                    <a style={{ color: '#FF6550' }}><FaPlusSquare /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {!search && <Paginate page={page}></Paginate>}
            </div>
        </>
    )
}
export default BlogList