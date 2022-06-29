import React, { useEffect } from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';
function useQuery() {
    return new URLSearchParams(useLocation().search)

}

const Paginate = ({ page, urlParams = 'homegarden' }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation()
    const query = useQuery()
    const p = query.get('p')

    const { numberOfPages } = useSelector(state => state.productState)
    return (
        <>
            {numberOfPages !== 1 ?

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
                            console.log(clickEvent.nextSelectedPage + 1)
                            !isNaN(clickEvent.nextSelectedPage) && navigate(`${location.pathname}?page=${clickEvent.nextSelectedPage + 1}${p ? `&p=${p}` : ''}`)
                            window.scrollTo(0, 150);
                            // Return false to prevent standard page change,
                            // return false; // --> Will do nothing.
                            // return a number to choose the next page,
                            // return 4; --> Will go to page 5 (index 4)
                            // return nothing (undefined) to let standard behavior take place.
                        }}

                    />
                </div> : null
            }
        </>
    )
}
export default Paginate