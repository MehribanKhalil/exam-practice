import React from 'react'
import './index.scss'
const SectionHeading = ({subTitle,title}) => {
  return (
    <div  className='section-heading'>
        <p className=' text-[15px] text-gray-400'>{subTitle}</p>
        <h2 className='section-heading-title'>{title}</h2>
    </div>
  )
}

export default SectionHeading