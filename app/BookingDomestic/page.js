"use client"
import React, { useState, useEffect, useContext } from 'react';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import "./bookDom.css"
import { ProgressBarContainer } from '@/Components/ProgressBarContainer';
import CounterPage from '@/Components/CounterPage';

import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { Navigate, useNavigate, useHistory } from "react-router-dom";
import Header from '@/Components/Header';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
//import Link from 'next/link';

const DomesticBook = (props) => {

  const [selectedItems, setSelectedItems] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    // Retrieve selected items from localStorage
    const storedItems = localStorage.getItem('selectedItems');
    if (storedItems) {
      setSelectedItems(JSON.parse(storedItems));
    }
  }, []);


  const router = useRouter(); 
  const [floors, setFloors] = useState(0);
  const [bhk, setBHK] = useState(0);
  const [familyMembers, setFamilyMembers] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [pets, setPets] = useState(false);
  const [minDatetime, setMinDatetime] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());


  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const minDatetimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;
    setMinDatetime(minDatetimeValue);
  }, []);


  const increment = (setStateFunction) => {
    setStateFunction(prevState => prevState + 1);
  };

  const decrement = (setStateFunction) => {
    setStateFunction(prevState => Math.max(prevState - 1, 0));
  };

  const handlePetsChange = (e) => {
    setPets(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission and API call
    //setSelectedItems(object);
    const formData = {
      selectedItems,
      floors,
      bhk,
      familyMembers,
      bathrooms,
      pets,
      fromDate,
      toDate
    };

    saveDomBookToDatabase(formData);

    /* try {
      // Assuming you have an API endpoint for posting reservation data
       const response = await axios.post('http://localhost:3001/api/domBook',
        {formData}); 
      console.log(formData); // For testing purposes
      console.log(JSON.stringify(formData));
      alert("Booked!")
       //window.location.href = "/Profile"; 
      // You can handle success or redirect to another page here
    } catch (error) {
      console.error('Error saving reservation:', error);
      // You can handle errors here
    } */
    
  };


  const saveDomBookToDatabase = async (data) => {

    console.log(data);
    console.log("data is there ",JSON.stringify(data));
   
     const apiEndpoint = `https://scube.jsontech.in/api/domBook`;

        try {
            const response = await axios.post(apiEndpoint, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Form data saved successfully:', response.data);
            alert("Booking Confirmed!");
            //window.location.href = "/Profile";
            router.push("/Profile");
        } catch (error) {
            console.error('Error saving form data:', error);
        }

  }

  const resetPage = () => {
    window.location.reload(false);
  };

  return (
    <>
    <Header />
    <form onSubmit={handleSubmit}>
        <div className="reservation-form">
          <h2 className='text-4xl font-bold text-black'>Confirm Your Booking Slot</h2>
          <div className='flex justify-around'>
    <div>


{/*     <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}


    <div className='flex justify-around'>
            {/* Floors */}
            <div className='flex'>
              <label className='w-[120px] text-[#000]'>Floors *</label>
              <div className='flex w-[300px]'>
                <div className='text-[#000]' onClick={() => decrement(setFloors)}><FaMinusCircle className='size-6 text-[#94D163]' /></div>
                <span className='px-2 text-black'>{floors}</span>
                <div onClick={() => increment(setFloors)} className='text-[#000]'><FaPlusCircle className='size-6 text-[#94D163]' /></div>
              </div>
            </div>
      </div>

         <div className='flex justify-around'>
            {/* BHK */}
            <div className='flex'>
              <label className='w-[120px] text-[#000]'>BHK *</label>
              <div className='flex w-[300px]'>
                <div className='text-[#000]' onClick={() => decrement(setBHK)}><FaMinusCircle className='size-6 text-[#94D163]' /></div>
                <span className='px-2 text-black'>{bhk}</span>
                <div onClick={() => increment(setBHK)} className='text-[#000]'><FaPlusCircle className='size-6 text-[#94D163]' /></div>
              </div>
            </div>
      </div>   

      <div className='flex justify-around'>
            {/* Family */}
            <div className='flex'>
              <label className='w-[120px] text-[#000]'>Family Members *</label>
              <div className='flex w-[300px]'>
                <div className='text-[#000]' onClick={() => decrement(setFamilyMembers)}><FaMinusCircle className='size-6 text-[#94D163]' /></div>
                <span className='px-2 text-black'>{familyMembers}</span>
                <div onClick={() => increment(setFamilyMembers)} className='text-[#000]'><FaPlusCircle className='size-6 text-[#94D163]' /></div>
              </div>
            </div>
      </div> 

      <div className='flex justify-around'>
            {/* Bathrooms */}
            <div className='flex'>
              <label className='w-[120px] text-[#000]'>Bathrooms *</label>
              <div className='flex w-[300px]'>
                <div className='text-[#000]' onClick={() => decrement(setBathrooms)}><FaMinusCircle className='size-6 text-[#94D163]' /></div>
                <span className='px-2 text-black'>{bathrooms}</span>
                <div onClick={() => increment(setBathrooms)} className='text-[#000]'><FaPlusCircle className='size-6 text-[#94D163]' /></div>
              </div>
            </div>
      </div>

      <div className='flex justify-start'>
              <label className='flex w-[95px] text-[#000]'>Pets?</label>
              <input type="checkbox" checked={pets} onChange={handlePetsChange} />
      </div>

    </div>

      {/* <input type="number" value={floor} onChange={(e) => {setFloor(e.target.value)}} min={1} max={5}/> */}
      <div className='flex justify-between gap-4'>
            <div>
              <label className='w-full text-[#000]'>From* :</label>
              <input type="datetime-local" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className='w-full text-black' id="fromDate" name="fromDate" min={minDatetime} required />
            </div>
            <div>
              <label className='w-full text-[#000]'>To* :</label>
              <input type="datetime-local" value={toDate} onChange={(e) => setToDate(e.target.value)} className='w-full text-black' id="toDate" name="toDate" min={minDatetime} required />
            </div>
          </div>
  </div>
          <div className='flex justify-end gap-4 fixed bottom-10 right-10 min-w-full'>
            <button onClick={resetPage} className='bg-[#34363A] text-2xl text-white font-bold w-[100px] p-[10px] rounded-sm'>Cancel</button>
            <button type="submit" className='bg-[#94D163] text-2xl text-black font-bold w-[100px] p-[10px] rounded-sm'>Book</button>
          </div>
    </div>
    </form>
    {/* <ProgressBarContainer/> */}
      
    </>
  )
}

// refresh page after cancel button to clear everything in the  form
const resetPage = (e) => {
  //confirm('Want to cancel form submission?');
  window.location.reload(false);
};


export default DomesticBook
