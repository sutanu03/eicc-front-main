import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import "../app/head.css"

function Header() {

  // header component
  {/* <div className="sticky top-0 z-10 bg-white bg-opacity-30 shadow-2xl">
      <div className="max-w-8xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <Link href="/">
      <h1 className="text-2xl text-gray-900 font-bold">
          EICC
        </h1>
      </Link>
      
      <div className="flex space-x-10 text-gray-900 font-semibold">
      <Link href="#About">About</Link>
      <Link href="#Contact">Contact</Link>
      {/* <Link href="">Assign User</Link> 
      <Link href="/Services">Services</Link>
      <Link href="/Profile"><FaUserCircle className='size-6'/></Link>
      </div>
     </div>
    </div>
    </div> */}

  return (
    <>

<div id='maindiv' >

<Link href="/HomePage"><h1 id='eicc' >EICC</h1></Link>
   
   <div id='linkdiv' >
   
         <Link href="/AboutUs">About</Link>
         <Link href="/ContactUs">Contact</Link>
   
         <Link href="/Services">Services</Link>
         <Link href="/Profile"><FaUserCircle className='size-6'/></Link>
         {/* <Link href="#">Logout</Link> */}
   
   </div>
   
   
   </div>

    </>
    
  );
}

export default Header;