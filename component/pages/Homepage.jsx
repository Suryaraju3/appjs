'use client';

import React, { useEffect,useState } from 'react';
import Header from '../common/Header';
import Link from 'next/link';
import useCountStore from '@/store/useCounterStore';
import axios from 'axios';

// import Increment from '../common/Increment';
const Homepage = () => {

 
    const name="smith";
    // const handclick = () => {
    //     alert('welcome');
    // }

    // const [count, setCount] = useState(0);
        
    //     const Increment = () => {
    //         setCount (count+1);
    //     }
    const {count,increase} = useCountStore();
   
 
  // const [data, setData] = useState([]);

  // function api(){
  //     const url=`http://127.0.0.1:8000/api/doctors/`;
  //     function api(){
  //     useEffect(()=>{
  //       const data = async()=>{
  //         const result = await data(url)
  //         console.log(result)
  //       }
  //       result();
  //     },[])

  //   }
 
  return (
    <div className='m-4'> 
  <Header />
    <div>
    <h1 className='text-4xl font-semibold'> {count} </h1>
    
      <button onClick={increase} className=' bg-green-500 text-white px-4 py-2 rounded-2xl cursor-pointer'>+</button>
      {/* <button  onClick={api} className='mt-10 text-white bg-yellow-300 px-3 py-2 rounded-2xl'>API</button> */}
    </div>
    




    
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
