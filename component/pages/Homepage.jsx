'use client';

import React, { useEffect,useState } from 'react';
import Header from '../common/Header';
import Link from 'next/link';
import useCountStore from '@/store/useCounterStore';
import axios from 'axios';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase';

// import Increment from '../common/Increment';
const Homepage = () => {

  const [user, setUser] = useState(null);

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setUser(user);
    })
    return ()=>unsubscribe();
    }, [])

  const Logout = async()=>{
    await signOut(auth);
  }

 
return (
  <div className='m-4'> 
    
  <Header />
  <Link href={'/about'} className='p-10'>about</Link>
  {
   
  user && ( 
  <div>
  <h1> Welcome {user.displayName}</h1>
  <button className='border py-2 px-4 rounded cursor-pointer mr-2' onClick={Logout}>logout</button>
  </div>
  )}






    {/* <div>
    {/* <h1 className='text-4xl font-semibold'> {count} </h1>
    
      <button onClick={increase} className=' bg-green-500 text-white px-4 py-2 rounded-2xl cursor-pointer'>+</button> */}
      {/* <button  onClick={api} className='mt-10 text-white bg-yellow-300 px-3 py-2 rounded-2xl'>API</button>
    </div> */} 
        
    {/* <Link href={'/about'}>Aboutus</Link> */}
    {/* <div>
    <p>Hi,{name}</p>
    </div> */}
    {/* <button onClick={handclick} className='bg-blue-700 px-4 py-2 rounded-2xl cursor-pointer'>Click</button> */}

    {/* <Increment/> */}
  
   
    </div>    
    
  )
}


export default Homepage
