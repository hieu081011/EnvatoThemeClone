import React from 'react'
import './style.scss'

const LoadingSpinner = () => {
    return (
        <>
            <div className='loading-spinner-container'>
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            </div>
        </>
    )
}
export default LoadingSpinner