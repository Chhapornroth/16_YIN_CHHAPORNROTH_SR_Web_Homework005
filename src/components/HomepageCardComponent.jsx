import React from 'react'
import Link from 'next/link'

const HomepageCardComponent = ({data}) => {
  return (
    <Link href={data.url}>
        <div className='relative w-64  h-90 overflow-hidden rounded-3xl shadow-xl'>
          <img src={data.image} alt='book cover'className='w-full h-full'/>\
          <div className='absolute top-5 left-5 bg-white flex justify-center items-center rounded-2xl px-2 py-1 text-[#1075AB] font-medium gap-2 shadow-xl z-10'>
            <data.icon className="w-4 h-4"/>
            <p>{data.label}</p>
          </div>
          <div className='absolute w-full h-full top-0 bg-black/0 hover:bg-black/35 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center px-10'>
            <p className='text-4xl text-white'>{data.text}</p>
          </div>
        </div>
    </Link>
  )
}

export default HomepageCardComponent