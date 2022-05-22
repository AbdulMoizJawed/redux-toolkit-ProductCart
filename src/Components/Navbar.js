import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const product = useSelector(state => state.cart)
  return (
    <div className='Navbar'>
        <div className='storeName'><span>Redux ToolKit Store</span></div>
        <div className='navigation'>
            <ul>
                <Link to='/'>Product</Link>
                <Link to='/cart'>Cart</Link>
            </ul>
            <span>Items :{product.length}</span>
        </div>
    </div>
  )
}

export default Navbar