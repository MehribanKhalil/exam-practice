import React from 'react'
import './index.scss'
import Button from '../../commonComponents/Button'


const SaleSection = () => {
    return (
        <section className='sale-section'>
            <div className=" w-full p-8 content md:p-20 space-y-7 text-center md:w-1/2">
                <h2 className=' text-4xl'>Up To 50% Off</h2>

                <div>
                    <h5 className=' text-2xl font-medium'>Winter Sale</h5>
                    <p>Him she'd let them sixth saw light</p>

                </div>
                <Button>Shop Now</Button>
            </div>
        </section>
    )
}

export default SaleSection