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
      {/* <div>
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
      </div> */}
      {/* <Token/> */}
      <section className="profile">
  <header className="header">
    <div className="details">
      <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" className="profile-pic"/>
      <h1 className="heading">Claire Doe</h1>
      <div className="location">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
</svg>
        <p>Kochi, India</p>
      </div>
      <div className="stats">
        <div className="col-4">
          <h4>20</h4>
          <p>Reviews</p>
        </div>
        <div className="col-4">
          <h4>10</h4>
          <p>Communities</p>
        </div>
        <div className="col-4">
          <h4>100</h4>
          <p>Discussions</p>
        </div>
      </div>
    </div>
  </header>
</section>

<div className="overflow-auto">
        {loading ? (
        <div>Loading...</div>
      ) : (
        <>
        <h1 className='font-bold text-2xl text-[#94D163] py-3 bg-slate-700 text-center'> My Bookings </h1>
        <div class="table-wrap">
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
          </div>
        </>
      )}

    </div>
    {/* <div className='flex justify-end gap-4 fixed bottom-10 right-10 min-w-full'>
        <button onClick={toLogin} className='bg-[#94D163] text-2xl text-black font-bold w-[100px] p-[10px] rounded-sm'>Logout</button>
      </div> */}
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
