import React from 'react'
import SectionHeading from '../../commonComponents/SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../../commonComponents/ProductCard';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import "./index.scss"

const BestSeller = () => {
    return (
        <section className='best-seller wrapper py-16' >
            <SectionHeading subTitle='Popular Item in the market' title='Best Sellers' />
              
            <div className='products py-4'>
                <Swiper
                    navigation={true} modules={[Navigation]}
                    spaceBetween={30}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                          },
                       
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },

                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    className="mySwiper"
                >
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                    <SwiperSlide><ProductCard/></SwiperSlide>
                   
                </Swiper>
            </div>

        </section >
    )
}

export default BestSeller