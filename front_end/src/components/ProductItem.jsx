import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
//getting id details from props and currency from context

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)
  return (
    <Link className="text-gray-700 cursor-pointer " to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image}
          alt=""
        />
        <p className="pt-3 pb-2 tezt-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency} {price}
        </p>
      </div>
    </Link>
  )
}
export default ProductItem
