"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./domestic.css";
import Link from 'next/link';
import Header from '@/Components/Header';
import { useRouter } from 'next/navigation';

const Domestic = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleSelection = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(item => item !== itemName));
      setSelectedCount(selectedCount - 1);
    } else {
      setSelectedItems([...selectedItems, itemName]);
      setSelectedCount(selectedCount + 1);
    }
  };

  const handleSelect = () => {
    // Store selected items in localStorage
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  };

  return (
    <>
    <Header />
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
        <div className={`tpn_card ${selectedItems.includes('Brooming') ? 'selected' : ''}`} onClick={() => toggleSelection('Brooming')}>
          <img src="/img/brooming.png" className="w-100 mb-4" />
          <h5>Brooming</h5>
          <p>From domestic help</p>
        </div>

        <div className={`tpn_card ${selectedItems.includes('Mopping') ? 'selected' : ''}`} onClick={() => toggleSelection('Mopping')}>
          <img src="/img/mopping.png" className="w-100 mb-4" />
          <h5>Mopping</h5>
          <p>From domestic help</p>
          </div>
        <div className={`tpn_card ${selectedItems.includes('Bathroom Cleaning') ? 'selected' : ''}`} onClick={() => toggleSelection('Bathroom Cleaning')}>
          <img src="/img/bathroom.png" className="w-100 mb-4" />
          <h5>Bathroom Cleaning</h5>
          <p>From domestic help</p>
          </div>
        <div className={`tpn_card ${selectedItems.includes('Dusting') ? 'selected' : ''}`} onClick={() => toggleSelection('Dusting')}>
          <img src="/img/dusting.png" className="w-100 mb-4" />
          <h5>Dusting</h5>
          <p>From domestic help</p>
          </div>
        <div className={`tpn_card ${selectedItems.includes('Dishwashing') ? 'selected' : ''}`} onClick={() => toggleSelection('Dishwashing')}>
          <img src="/img/dish.png" className="w-100 mb-4" />
          <h5>Dishwashing</h5>
          <p>From domestic help</p>
          </div>
      </div>
      <div className="text-center mt-3">
        <p>Your Selected Items: {selectedCount}</p>
        <Link href="/BookingDomestic">
          <Button
            className='text-[#000] bg-[#94D163] font-semibold'
            variant="primary"
            onClick={handleSelect}
            disabled={selectedCount === 0}
          >
            Confirm Booking
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Domestic;
