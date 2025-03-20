
import Link from 'next/link'
import React from 'react'

const BookCardComponent = ({book}) => {
  return (
    <div className='flex px-9 py-5 bg-gray-50 rounded-4xl h-48 max-w-105 drop-shadow-sm mb-30'>
        <div className='relative w-1/2'>
            <div className='w-36 h-50 relative -top-25'>
                <img 
                className='rounded-2xl drop-shadow-lg absolute h-full w-full text-transparent'
                src={book.image} alt="" />
            </div>
            <Link href={`read-full-article/${book.id}?type=book&name=book+categories&title=${book.book_title}`} className='bg-blue-200 absolute bottom-2 px-2.5 py-[0.390rem] rounded-full w-36 text-[0.81rem] text-[#155281] hover:bg-[#1075AB] hover:text-gray-50 transition delay-150 duration-300 ease-in-out hover:-translate-y-1'>READ FULL ARTICLE</Link>
        </div>
        <div className='w-1/2'>
            <h2 className='font-medium text-[#155281] truncate'>{book.book_title}</h2>
            <p className='text-[#155281] line-clamp-6 text-justify text-sm font-light'>{book.description}</p>
        </div>
    </div>
  )
}

export default BookCardComponent