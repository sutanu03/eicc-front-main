"use client"
import { useContext, useEffect, useState } from "react"
import "./profile.css"
import Table from 'react-bootstrap/Table';
import Header from '@/Components/Header';
import Link from 'next/link';
import  axios  from 'axios';
import { UserContext } from "@/context/UserContext";
import { Token } from "../store/slices/tokens/token";

const Profile = () => {

    const logoutDone = () => {
        window.location.reload(false);
    }


    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { token, setToken } = useContext(UserContext);

    useEffect(() => {
     // Process();
    // console.log(token);
     localStorage.setItem('token', token);
      if(token !== null){
        setLoading(true)
        fetch(`https://scube.jsontech.in/api/showdombookings`, {
          headers: { Authorization: `Bearer ${token}` }
      })
        .then(response => response.json())
        .then(json => setUserData(json))
        .finally(() => {
          
          setLoading(false)
        })
      }
      
    }, [token])


    // const Process = async() =>{

    //   const response = await axios.get('https://scube.jsontech.in/api/protected'); 
    //   let LoginStatusCheck = response.data;
    //   console.log(JSON.stringify(LoginStatusCheck));

    //   if(LoginStatusCheck.success===true){
    //     window.location.href = "/Profile"
    //   }
    //   else{
    //     window.location.href = "/Login"

    //   }

    // }

  return(
      <>
      <Header/>
      <div>
        {loading ? (
        <div>Loading...</div>
      ) : (
        <>
        <h1 className='font-bold text-2xl text-[#94D163] py-3 bg-slate-700 text-center'> My Bookings </h1>
          <table className="table table-striped">
            <thead>
            <tr>
            <th>Booking ID</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Date of Booking</th>
            <th>Pets</th>
            <th>No of Floors</th>
            <th>No of BHK</th>
            <th>No of Bathrooms</th>
            <th>No of Family Members</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(userData) && userData.map(info => (
              <tr key={info.booking_id}>
                <td>{info.booking_id}</td>
                  <td>{info.fromdate}</td>
                  <td>{info.to_date}</td>
                  <td>{info.date_of_booking}</td>
                  <td>{info.pets}</td>
                  <td>{info.no_of_floors}</td>
                  <td>{info.no_of_bhk}</td>
                  <td>{info.no_of_bathrooms}</td>
                  <td>{info.no_of_family_members}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}

    </div><div className='flex justify-end gap-4 fixed bottom-10 right-10 min-w-full'>
        <button onClick={toLogin} className='bg-[#94D163] text-2xl text-black font-bold w-[100px] p-[10px] rounded-sm'>Logout</button>
      </div>
      {/* <Token/> */}
      </>
  )
}



// redirect to login route
const toLogin = () => {
  console.log(localStorage.getItem('token'));
  //setToken(null);
  localStorage.removeItem('token');
  window.location.href = "/";
}

export default Profile
