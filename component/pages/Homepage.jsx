'use client';
import React, { useEffect,useState } from 'react';
import Header from '../common/Header';
import Link from 'next/link';
import useCountStore from '@/store/useCounterStore';
import axios from 'axios';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import PatientDetails from '@/List/PatientDetails';
import DoctorList from '@/List/DoctorsList';
import Pharmacy from '@/List/Pharmacy';
import LoginPage from '@/Loginpage/Login';

const Homepage = () => {

  //     useEffect(()=>{
  //         const unsubscribe = onAuthStateChanged(auth,(user)=>{
  //         setUser(user);
  //      })
  //       return ()=>unsubscribe();
  //      }, [])
  //      const Logout = async()=>{
  //      await signOut(auth);
  // }

 
return (
  <div className='m-4'> 

 
  <Header />
  
  {/* {

  user && ( 
  <div>
  <h1> Welcome {user.displayName}</h1> 
   <button className='border py-2 px-4 rounded cursor-pointer mr-2' onClick={Logout}>logout</button>
  </div>
  )} */}
  <LoginPage/>
   <PatientDetails/>
   <Pharmacy/>
    </div>    
    
  )
}


export default Homepage
