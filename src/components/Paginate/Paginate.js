import React from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const Paginate = ({ page }) => {

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
                    pageCount={Number(numberOfPages) || 1}
                    previousLabel={< AiOutlineLeft />}
                    renderOnZeroPageCount={null}
                    breakLabel={''}
                    onClick={(clickEvent) => {

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