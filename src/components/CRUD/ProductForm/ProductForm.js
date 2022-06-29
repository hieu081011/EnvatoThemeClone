import React, { useState, useEffect, Fragment } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, updateProduct, deleteProduct, getProductsDisplay } from '../../../actions/products'
const ProductForm = () => {
    const [productData, setProductData] = useState({
        name: '', type: 'Mega Fashion', overView: '', category: '', sku: 'megafashion_04', manufacturer: '', price: 0, sale: 0, size: [], color: '', image: [], brand: '',
    })
    const [currentId, setCurrentId] = useState(null)
    const { products } = useSelector((state) => state.productState)

    const dispatch = useDispatch()
    const product = useSelector((state) => currentId ? state.productState.products.find((product) => (product._id === currentId)) : null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updateProduct(currentId, productData))
        }
        else {

            dispatch(createProduct(productData))
        }
        setProductData({ name: '', type: 'Mega Fashion', overView: '', category: '', sku: 'megafashion_04', manufacturer: '', price: 0, sale: 0, size: [], color: '', image: [], brand: '', })
        setCurrentId(null)
    }
    useEffect(() => {
        if (product) setProductData(product)
    }, [product])
    useEffect(() => {
        dispatch(getProductsDisplay());
    }, [dispatch, currentId,])
    return (<>
        <div className='product-form-container'>
            <div className='form-container'>
                <h1>Create Product</h1>
                <h2>Name</h2>
                <input type='text' onChange={e => setProductData({ ...productData, name: e.target.value })} value={productData.name} />
                <h2>Type</h2>
                <label><input type='radio' name='type' onChange={e => setProductData({ ...productData, type: e.target.value })} value='Home Garden' checked={productData.type === 'Home Garden'} />Home Garden</label>
                <label><input type='radio' name='type' onChange={e => setProductData({ ...productData, type: e.target.value })} value='Mega Fashion' checked={productData.type === 'Mega Fashion'} />Mega Fashion</label>
                <label><input type='radio' name='type' onChange={e => setProductData({ ...productData, type: e.target.value })} value='Brands' checked={productData.type === 'Brands'} />Brands</label>
                <h2>Over View</h2>
                <input type='text' onChange={e => setProductData({ ...productData, overView: e.target.value })} value={productData.overView} />
                <h2>Category</h2>
                <input type='text' onChange={e => setProductData({ ...productData, category: e.target.value })} value={productData.category} />
                <h2>SKU</h2>
                <input type='text' onChange={e => setProductData({ ...productData, sku: e.target.value })} value={productData.sku} />
                <h2>Manufacturer</h2>
                <label><input type='radio' name='manufacturer' onChange={e => setProductData({ ...productData, manufacturer: e.target.value })} value='Hm' checked={productData.manufacturer === 'Hm'} />HM</label>
                <label><input type='radio' name='manufacturer' onChange={e => setProductData({ ...productData, manufacturer: e.target.value })} value='Zara' checked={productData.manufacturer === 'Zara'} />Zara</label>
                <label><input type='radio' name='manufacturer' onChange={e => setProductData({ ...productData, manufacturer: e.target.value })} value='Pull And Bear' checked={productData.manufacturer === 'Pull And Bear'} />Pull And Bear</label>
                <label><input type='radio' name='manufacturer' onChange={e => setProductData({ ...productData, manufacturer: e.target.value })} value='' checked={productData.manufacturer === ''} />None</label>
                <h2>Price</h2>
                <input type='number' onChange={e => setProductData({ ...productData, price: e.target.value })} value={productData.price}></input>
                <h2>Sale</h2>
                <input type='number' onChange={e => setProductData({ ...productData, sale: e.target.value })} value={productData.sale}></input>
                <h2>Size</h2>
                <input type='text' onChange={e => setProductData({ ...productData, size: e.target.value.split(',') })} value={productData.size} />
                <h2>Color</h2>
                <input type='text' onChange={e => setProductData({ ...productData, color: e.target.value })} value={productData.color} />
                <h2>Image</h2>
                <input type='text' onChange={e => setProductData({ ...productData, image: e.target.value.split(',') })} value={productData.image} />
                <h2>Brand</h2>
                <input type='text' onChange={e => setProductData({ ...productData, brand: e.target.value })} value={productData.brand} />
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>

            <div className='product-table'>
                <div>STT</div>
                <div>Id</div>
                <div>Product Name</div>
                <div>Image</div>
                <div>
                    Actions
                </div>
                {products && products.map((product, index) => (<Fragment key={product._id}>
                    <div>{index + 1}</div>
                    <div>{product._id}</div>
                    <div>{product.name}</div>
                    <div>{Array.isArray(product.image) === true ? product.image.join(',') : product.image}</div>
                    <div>
                        <button
                            onClick={() => {
                                setCurrentId(product._id);

                            }

                            }>Update</button>
                        <button
                            onClick={() => {
                                dispatch(deleteProduct(product._id))
                            }}
                        >Delete</button>
                    </div>
                </Fragment>))}
            </div>

        </div>
    </>)
}
export default ProductForm