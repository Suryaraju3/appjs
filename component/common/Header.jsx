'use client';
import { auth, signInWithGoogle } from '@/firebase';
import useCountStore from '@/store/useCounterStore';
import { Link } from 'lucide-react';

import React, { useState } from 'react'


const Header = () => {

  const {count, decrease} = useCountStore();

  return (

    <div className='flex justify-end  '>


      
      
      <button onClick={signInWithGoogle}  className='border-amber-400 px-4 py-2 rounded cursor-pointer bg-amber-400 '>sign in</button>


    </div>
  )
}

export default Header
