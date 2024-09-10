"use client"
import React from 'react';
import "../AboutUs/about.css";
import Header from '@/Components/Header';

const page = () => {
  return (
    <>
    <Header className="fixed"/>
<div className="about-section">
  <h1 className='text-3xl text-center font-bold'>About Us</h1>
  <p>We are EICC working since 2015</p>
</div>

<h2 /* style="text-align:center" */ className='text-3xl text-black text-center font-bold '>Meet Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img className='w-100' src="/img/senior-1.jpg" alt="Jane" /* style="width:100%" *//>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img className='w-100' src="/img/man-2.jpg" alt="Mike" /* style="width:100%" *//>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img className='w-100' src="/img/man-3.jpg" alt="John" /* style="width:100%" *//>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
      
    </>
  )
}

export default page
