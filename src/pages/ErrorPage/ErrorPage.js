import React from 'react'
import './style.scss'
const ErrorPage = () => {
    return (
        <>
            <div className='error-page-container'>
                <div className='page-content'>

                    <div>PAGE NOT AVAILABLE</div>
                    <img src='http://localhost:5000/image/error/404.jpg' />
                </div>
            </div>
        </>
    )
}
export default ErrorPage