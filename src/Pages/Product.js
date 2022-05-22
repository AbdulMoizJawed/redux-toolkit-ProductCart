import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Store/cartSlice'
import axios from 'axios'
import { fetchProducts } from '../Store/productSlice'
import { STATUSES } from '../Store/productSlice'

const Product = () => {
    // const [products, setProducts] = useState([])
    const{ data:products, status}= useSelector(state => state.product)

    const dispatch = useDispatch();
    
    useEffect(() => {
        // axios('https://fakestoreapi.com/products')
        // .then((res)=>{
        //     console.log(res)
        //    setProducts(res.data)
        // })
        // .catch((err) => {
        //   console.log(err)
        // })

        dispatch(fetchProducts())
        
        
    },[])

    const handleAdd = (product)=>{
        dispatch(add(product))
    }

    if(status ===STATUSES.LOADING){
    return <h2>Loading...</h2>
    }
    if(status ===STATUSES.ERROR){
    return <h2>There's a Problem...</h2>
    }
    
  return (
    <div className='productContainer'>
        {products && products.map(product=>(
        <div className='productCard' key={product.id}>
            <h5>{product.title}</h5>
            <img className='productImage' src={product.image} alt='img' /> 
            <h5>Price: RS { product.price}</h5>
            <button onClick={()=>handleAdd(product)}>Add To Cart</button>
     
        </div>
    ))}
    </div>
  )
}

export default Product