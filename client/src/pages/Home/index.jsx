import React from 'react'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import TrendingProducts from '../../components/HomePageComponents/TrendingProducts'
import SaleSection from '../../components/HomePageComponents/SaleSection'
import BestSeller from '../../components/HomePageComponents/BestSellerSection'
import NewsSection from '../../components/HomePageComponents/NewSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <TrendingProducts/>
        <SaleSection/>
        <BestSeller/>
        <NewsSection/>
    </>
  )
}

export default Home