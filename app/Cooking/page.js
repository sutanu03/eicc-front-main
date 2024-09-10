// CookBook
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { useContext } from "react";
import "./bookCook.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Header from '@/Components/Header';
import { useRouter } from 'next/navigation';

const CookBook = () => { 

    const router = useRouter();
    const [family, setFamily] = useState(0);
    const [minDatetime, setMinDatetime] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [pet, setPet] = useState(false);
    const { token } = useContext(UserContext);
    console.log(token, "from CookBook");

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

    const handleFromChange = (event) => {
        setFromDate(event.target.value);
    };

    const handleToChange = (event) => {
        setToDate(event.target.value);
    };

    const handlePetsChange = () => {
        setPet(!pet);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cookObj = {
            selectedItems: "Cooking",
            familyMembers: family,
            pets: pet,
            fromDate: fromDate,
            toDate: toDate,
        };

        saveCookBookToDatabase(cookObj);
    };

    const saveCookBookToDatabase = async (data) => {
        const apiEndpoint = `https://scube.jsontech.in/api/cookBook`;

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
    };

    const resetPage = () => {
        window.location.reload(false);
    };

    return (
        <>
            <Header />
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="reservation-form">
                        <h2 className='text-4xl font-bold text-black'>Confirm Your Booking Slot</h2>
                        <div className='flex justify-around'>
                            <div>
                                <div className='flex'>
                                    <label className='w-[120px] text-[#000]'>Family members *</label>
                                    <div className='flex w-[300px]'>
                                        <div className='text-[#000]' onClick={() => setFamily(Math.max(0, family - 1))}>
                                            <FaMinusCircle className='size-6 text-[#94D163]' />
                                        </div>
                                        <span className='px-2 text-black'>{family}</span>
                                        <div onClick={() => setFamily(family + 1)} className='text-[#000]'>
                                            <FaPlusCircle className='size-6 text-[#94D163]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-start'>
                                    <label className='flex w-[100px] text-[#000]'>Pets? <p className="text-xs w-[100px] text-gray-800">(click tick if yes)</p></label>
                                    <input type="checkbox" className="ml-0 mt-2" checked={pet} onChange={handlePetsChange} />
                                </div>
                            </div>
                            <div id='formto' className='flex justify-between gap-4'>
                                <div>
                                    <label className='w-full text-[#000]'>From* :</label>
                                    <input className='w-full text-black' type="datetime-local" value={fromDate} onChange={handleFromChange} id="datetime1" name="datetime1" min={minDatetime} required />
                                </div>
                                <div>
                                    <label className='w-full text-[#000]'>To* :</label>
                                    <input type="datetime-local" value={toDate} onChange={handleToChange} className='w-full text-black' id="datetime1" name="datetime1" min={minDatetime} required />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end gap-4 fixed bottom-10 right-10 min-w-full'>
                            <button onClick={resetPage} className='bg-[#34363A] text-2xl text-white font-bold w-[100px] p-[10px] rounded-sm'>Cancel</button>
                            <button type="submit" className='bg-[#94D163] text-2xl text-black font-bold w-[100px] p-[10px] rounded-sm'>Book</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CookBook;

