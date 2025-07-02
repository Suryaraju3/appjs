'use client';

import useCountStore from '@/store/useCounterStore';
import React from 'react'


const Header = () => {
  const {count, decrease} = useCountStore();

  return (


    <div className='flex justify-between'>
      
      <h1>logon {count} </h1>
      {/* <p>{username}</p> */}
      <button onClick={decrease} className='text-white bg-red-500 px-4 py2 rounded-2xl cursor-pointer'>-</button>
    </div>
  )
}

export default Header
