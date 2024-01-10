import React from 'react'

const Button = ({children}) => {
  return (
    <button className=' rounded-full border max-w-[170px] border-gray-400 px-8 py-2 font-semibold  hover:border-main-color custom-transition' >{children}</button>
  )
}

export default Button