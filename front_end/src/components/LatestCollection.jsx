import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [])
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-xs sm:tex-sm md:text-base text-gray-600   ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          itaque quia explicabo, expedita neque, praesentium a voluptatem,
          provident accusamus nobis blanditiis!
        </p>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-8">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
