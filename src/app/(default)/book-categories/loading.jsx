import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-3'>
      <div className="lds-hourglass"></div>
      <p>Loading</p>
    </div>
  )
}

export default Loading