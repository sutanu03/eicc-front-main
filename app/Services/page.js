import React from 'react';
import Link from 'next/link';
import Header from '@/Components/Header';
import "./services.css"

const Services = () => {
  return (
    <>
    <Header className="fixed"/>
    <div id='maindiv' className='flex items-center justify-around mt-5'>


<Link href="/DomesticHelp">
    <div id='card1' className="card">
  <img src="/img/clean.png" className="card__image" alt="brown couch" />
  <div className="card__content">
    <time dateTime="2021-03-30" className="card__date">Brooming |
        Mopping |
        Bathroom Cleaning |
        Dusting |
        Dishwashing</time>
    <span className="card__title">
        Domestic Help
        </span>
  </div>
</div>
</Link>

<Link href="/Cooking">
    <div id='card2'  className="card">
  <img  src="/img/cook.png" className="card__image" alt="brown couch" />
  <div className="card__content">
    <time dateTime="2021-03-30" className="card__date">Feels like home...</time>
    <span className="card__title">Cooking</span>
  </div>
</div>
</Link>



    </div>
    </>
  )
}

export default Services
