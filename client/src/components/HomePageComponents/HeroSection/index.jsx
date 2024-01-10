import React from 'react'
import Button from '../../commonComponents/Button'

const HeroSection = () => {
    return (
        <section className='hero-section bg-main-color '>
            <div className="section-content flex " >
                <div className='right-side w-[10%] md:w-[40%] relative h-[100vh]'>
                    <div className=' hidden md:block max-w-[700px] absolute bottom-0 -right-20  '>
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png" alt="" />
                    </div>
                </div>
                <div className='left-side w-[90%] md:w-[60%]  bg-gray-color p-5 md:p-10 xl:p-32 '>
                    <div className=" h-full space-y-6 flex flex-col  justify-center">
                        <p className=' text-gray-400 font-medium'>Shop is fun</p>
                        <h1 className=' font-bold'>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <Button>Browse Now</Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection