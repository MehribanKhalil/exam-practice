import React from 'react'
import SectionHeading from '../../commonComponents/SectionHeading'
import NewsCard from './NewsCard'

const NewsSection = () => {
    return (
        <section className='wrapper py-16'>
            <SectionHeading title='Latest News' subTitle='Popular Item in the market' />


            <div className='news grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-12 gap-10'>
                <NewsCard img='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png'
                    title='The Richland Center Shooping News and weekly shooper'
                    info='Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.'
                />

                <NewsCard img='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png'
                    title='The Richland Center Shooping News and weekly shooper'
                    info='Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.'
                />

                <NewsCard img='https://preview.colorlib.com/theme/aroma/img/blog/blog1.png'
                    title='The Richland Center Shooping News and weekly shooper'
                    info='Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.'
                />
            </div>

        </section>
    )
}

export default NewsSection