import React from 'react'
import Contact from './Contact'

const NavBar = () => {
  return (
    <div>
        <ul className='flex bg-blend-color-dodge'>
            <li>Perfil</li>
            <li>Home</li>
            <li><Contact/></li>
        </ul>
    </div>
  )
}

export default NavBar