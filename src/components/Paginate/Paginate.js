import React, { useEffect } from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../actions/blogs'
import { useNavigate } from 'react-router-dom';

const Paginate = ({ page }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { numberOfPages } = useSelector((state) => state.blogState)

    return (
        <>
            <div className='paginate-container'>

                <ReactPaginate
                    activeClassName='active'
                    nextLabel={< AiOutlineRight />}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={0}
                    forcePage={Number(page) - 1 || 0}
                    pageCount={Number(numberOfPages)}
                    previousLabel={< AiOutlineLeft />}
                    renderOnZeroPageCount={null}
                    breakLabel={''}
                    onClick={(clickEvent) => {
                        console.log(clickEvent.nextSelectedPage + 1)
                        !isNaN(clickEvent.nextSelectedPage) && navigate(`/blogs?page=${clickEvent.nextSelectedPage + 1}`)
                        window.scrollTo(0, 150);
                        // Return false to prevent standard page change,
                        // return false; // --> Will do nothing.
                        // return a number to choose the next page,
                        // return 4; --> Will go to page 5 (index 4)
                        // return nothing (undefined) to let standard behavior take place.
                    }}

                />
            </div>
        </>
    )
}
export default Paginate