import React from 'react'
import SideBar from '../SideBar'
import MainContent from '../MainContent'
import { useContextGlobal } from '../Context/context'

const Home = () => {
  const { user} = useContextGlobal()
  return (
    <div className='w-full flex flex-row justify-start items-start m-0 p-0'>
      <SideBar/>
      <MainContent/>
    </div>
  )
}

export default Home