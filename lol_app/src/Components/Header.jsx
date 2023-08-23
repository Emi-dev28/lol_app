import React, { useState } from 'react'
import { FaAirbnb, FaRegMoon } from 'react-icons/fa6'
import '../Styles/input.css'

const Header = () => {

  // Este estado nos va a servir en el futuro
  const [search, setSearch] = useState('')
  const handleSearch = (search) => {
    setSearch(search)
  }
  return (
    <header className=' flex flex-row justify-between justify-items-center items-center
     bg-blue-900 mx-auto h-12 text-white'>
        <i className=' text-3xl p-3'><FaAirbnb/></i>
        <div className='<div class="bg-gray-300 bg-opacity-50 py-2 px-4 flex items-center'>
        <input
        className='gradient-input text-center rounded-lg p-1  mx-2 text-gray-300 bg-inherit outline-none w-full ml-2' 
        type="search" 
        placeholder='Busca un invocador'
        />
        <button className=' bg-inherit rounded-xl p-1.5 mx-4 bg-gray-800 w-40 hover:text-gray-500'
        onClic={handleSearch}
        >
          Buscar
        </button>
        </div>
        <i className='text-3xl p-3'>
          <FaRegMoon/>
        </i>
    </header>
  )
}

export default Header