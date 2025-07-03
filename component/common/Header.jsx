'use client';

import { auth, signInWithGoogle } from '@/firebase';
import useCountStore from '@/store/useCounterStore';
import { Link } from 'lucide-react';

import React, { useState } from 'react'


const Header = () => {
  const {count, decrease} = useCountStore();



  return (


    <div className='flex justify-end '>
      
      {/* <h1>logon {count} </h1> 
       <p>{username}</p>
      <button onClick={decrease} className='text-white bg-red-500 px-4 py2 rounded-2xl cursor-pointer'>-</button> */}
     
      <button onClick={signInWithGoogle}  className='border px-4 py-2 rounded cursor-pointer '>sign in</button>
    </div>
  )
}

export default Header
