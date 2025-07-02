'use client';

import React from 'react';
import Header from '../common/Header';
import Link from 'next/link';
import Increment from '../common/Increment';
import Useeffce from '../common/Useeffce';


const Homepage = () => {

    // const name="smith";
    // const handclick = () => {
    //     alert('welcome');
    // }
 
  return (
    <div className='m-4'> 
    {/* <Header username={name}/> */}
    
    {/* <Link href={'/about'}>Aboutus</Link> */}
    {/* <div>
    <p>Hi,{name}</p>
    </div> */}
    {/* <button onClick={handclick} className='bg-blue-700 px-4 py-2 rounded-2xl cursor-pointer'>Click</button> */}

    {/* <Increment/> */}
    <Useeffce/>
    {/* <Hook/> */}
    
    </div>    
    
  )
}

export default Homepage
