"use client"
import React, { useEffect, useState } from 'react'
import "../HomePage/login.css"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Register = () => {


    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have an API endpoint for posting reservation data
      //console.log(mobileNo);
      const response = await axios.post(`https://scube.jsontech.in/api/register`, {
        email, password 
      });

      if(response.data.success == true)
        {
          toast.success('Registered, now please sign in!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

           //window.location.href = "/";
           router.push("/");
            
        }
        else
        {
          toast.error('Wrong Credentials!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
      
      console.log('Reservation saved:', response.data);
      // setMobileNo('1234567890')
      //console.log("MN - "+mobileNo);
    } catch (error) {
      console.error('Error saving reservation:', error);
      {
        toast.error('Error occured! Please re-check email and password', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }
  };


  return (
    <>
      <div className="login-container h-screen">
  <div className="login-content">
    <div className="login-content_header">
      <h2>Hello, please sign-up!</h2>
    </div>
    <div>
      <form className="login-form"  onSubmit={sendOtp}>
        <div>
        <label htmlFor="email" className=''>Email ID</label>
        <input type="email" id="phone" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="ex: someone@gmail.com"/>
        </div>
        {/* <br />
        <a className='sob'><button>Send OTP</button></a>
        <br /> */}
        
        <div>
        <label htmlFor="password">Password</label><br />
        <input id='otpIn' type="password" name="password" placeholder="ex: Abcd231@" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <input type="submit" value="Submit" className='btn-lC'/>
        </form>
        <a className='sob'><button onClick={() => router.push("/")}>Sign-in</button></a>
      <div className="login-netoworks">
        
        <div className="login-or">
        </div>
{/*         <ul className="login-icons">
          <li>
            <box-icon color="#fff" type='logo' name='google'></box-icon> Sing in with Google
          </li>
          <li>
            <box-icon color="#fff" type='logo' name='facebook-circle'></box-icon> Sing in with Facebook
          </li>
          <li>
            <box-icon color="#fff" type='logo' name='github'></box-icon> Sing in with GitHub
          </li>
        </ul> */}
      </div>
    </div>
  </div>
  <div className="login-footer">
    <p>Terms of use | Privacy policy</p>
  </div>
</div>
    </>
  )
};


export default Register
