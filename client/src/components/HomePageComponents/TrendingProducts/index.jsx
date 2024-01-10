import React, { useEffect, useState } from 'react'
import SectionHeading from '../../commonComponents/SectionHeading'
import ProductCard from '../../commonComponents/ProductCard'
import axios from 'axios'

const TrendingProducts = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/api/product/")
    setProducts(res.data)
  }

  console.log(products);

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className=' py-16  section-wrapper'>
      <SectionHeading subTitle='Popular Item in the market' title='Trending Product' />


      <div className=' py-9 grid grid-cols-4 gap-6 ' >
        {
         products && products.map((item) =>(
          <ProductCard image={item.image} title={item.title} category={item.category} price={item.price} />
         ))
        }

      </div>
    </section>
  )
}

export default TrendingProducts