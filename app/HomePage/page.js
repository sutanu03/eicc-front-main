"use client"
import React, {Component} from 'react';
import css from '../home.css';
import Header from '@/Components/Header';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Header/>
<div className="hero">
  <div className="overlay"></div>
  <div className="content">
    <div className="absolute inset-0 justify-center items-center z-10 w-[100%] h-[40%] top-[80%] bg-white py-[2%]">
  
    <h1>Welcome to EICC Home Services</h1>
    <p>Your helping hand...</p>
    </div>

    <div className="CSSgal">

<s id="s1"></s> 
<s id="s2"></s>
<s id="s3"></s>
<s id="s4"></s>
<s id="s5"></s>

<div className="slider mt-6">
  <div>
  {/* block ml-auto mr-auto w-[50%] */}
          <div className=''>
          <Link href="/Services"><img src="/img/slide1.png" className="w-[full] h-[full]  rounded-lg" /></Link>
          </div>
  </div>
  <div>
          <div className=''>
          <Link href="/Services"><img src="/img/slide2.png" className="w-[full] h-[full]  rounded-lg" /></Link>
          </div>
  </div>
  <div>
          <div className=''>
          <Link href="/Services"><img src="/img/slide3.png" className="w-[full] h-[full]  rounded-lg" /></Link>
          </div>
  </div>
  <div>
          <div className=''>
          <Link href="/Services"><img src="/img/slide4.png" className="w-[full] h-[full] rounded-lg" /></Link>
          </div>
  </div>
  <div>
          <div className=''>
          <Link href="/Services"><img src="/img/slide5.png" className="w-[full] h-[full]  rounded-lg" /></Link>
          </div>
  </div>
</div>

<div className="prevNext">
  <div><a href="#s5"><GrLinkPrevious className='text-[#94D163] size-20 font-bold'/></a><a href="#s2"><GrLinkNext className='text-[#94D163] size-20 font-bold'/></a></div>
  <div><a href="#s1"><GrLinkPrevious className='text-[#94D163] size-20 font-bold'/></a><a href="#s3"><GrLinkNext className='text-[#94D163] size-20 font-bold'/></a></div>
  <div><a href="#s2"><GrLinkPrevious className='text-[#94D163] size-20 font-bold'/></a><a href="#s4"><GrLinkNext className='text-[#94D163] size-20 font-bold'/></a></div>
  <div><a href="#s3"><GrLinkPrevious className='text-[#94D163] size-20 font-bold'/></a><a href="#s5"><GrLinkNext className='text-[#94D163] size-20 font-bold'/></a></div>
  <div><a href="#s4"><GrLinkPrevious className='text-[#94D163] size-20 font-bold'/></a><a href="#s1"><GrLinkNext className='text-[#94D163] size-20 font-bold'/></a></div>
</div>

<div className="bullets">
  <a href="#s1">1</a>
  <a href="#s2">2</a>
  <a href="#s3">3</a>
  <a href="#s4">4</a>
  <a href="#s5">5</a>
</div>

</div>

</div>
</div>
    </>
  )
}

export default Home
