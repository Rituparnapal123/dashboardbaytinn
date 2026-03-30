// import React from 'react'
import { Outlet } from 'react-router-dom'
import Leftmenu from './Leftmenu'

const MainLayout = () => {
  return (
    <>
        {/* MainLayout */}

        <div className='appMain-container'>
      <Leftmenu />

      <div className='appMain-right'>   
        <Outlet />

      </div>{/*-- appMain-right(End) --*/}

      </div>{/*-- appMain-container(End) --*/}
    </>
  )
}

export default MainLayout