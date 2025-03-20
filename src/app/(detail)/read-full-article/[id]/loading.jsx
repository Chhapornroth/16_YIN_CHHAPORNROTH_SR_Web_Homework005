import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-3'>
      <div className="lds-hourglass"></div>
      <p>Loading</p>
    </div>
  )
}

export default Loading