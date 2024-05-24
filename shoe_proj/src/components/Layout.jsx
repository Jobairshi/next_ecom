"use client";
import React from 'react'
import Sidebar from './Sidebar'
import { useRouter } from 'next/navigation';

export default function Layout({children}) {
    const token =  localStorage.getItem('Admintoken')
  const router = useRouter();
  if(!token){
    router.push('/error')
  }  
  return (
    <div className='flex'>
        
      <Sidebar/>
      <div className='flex-1 py-14 px-20'>{children} </div>
    
    </div>
  )
}
