import DashboardComponent from '@/components/DashboardComponent'
import HomepageCardComponent from '@/components/HomepageCardComponent'
import { homeCardList } from '@/data/homeCardList'
import React from 'react'

const page = () => {
  return (
    <>
      <DashboardComponent>
        <div key="Homepage" className='flex gap-20 justify-center mt-20'>
          {homeCardList.map(item => (
            <HomepageCardComponent data={item} key={item.id}/>
          ))}
        </div>
      </DashboardComponent>
    </>
  )
}

export default page