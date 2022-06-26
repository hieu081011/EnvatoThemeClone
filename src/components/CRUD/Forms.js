import React, { useState } from 'react'
import './style.scss'
import BlogForm from './BlogForm/BlogForm'
import ProductForm from './ProductForm/ProductForm'
const Forms = () => {
    const [state, setState] = useState(0)
    return (
        <>
            <div className='fomrs-container'>
                <div className='form-navbar'>
                    <div className={state == 0 ? 'active' : null} onClick={() => setState(0)}>Blog Form</div>
                    <div className={state == 1 ? 'active' : null} onClick={() => setState(1)}>Product Form</div>
                </div>
                {state == 0 ? <BlogForm></BlogForm> : null}
                {state == 1 ? <ProductForm></ProductForm> : null}

            </div>
        </>
    )
}
export default Forms