"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import { useContext } from "react";
import { useRouter } from "next/navigation";
import "../app/HomePage/login.css";

const LoginOTP = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { token, setToken } = useContext(UserContext);

    const sendOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://scube.jsontech.in/api/login`, {
                email, password 
            });

            const token2 = response.data.token;
           // console.log(token2, "from login response");

            if (response.data.success) {
                toast.success('Signed in!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                setToken(token2);
                localStorage.setItem('token', JSON.stringify(token));
                console.log('token from local s - ',localStorage.getItem('token'));
             //   console.log("Token set in context:", token2);
                router.push("/HomePage");
                document.body.style.background = "white";
              //  window.location.href = "/HomePage";
            } else {
                toast.error('Wrong Username or password!', {
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
        } catch (error) {
            toast.error('Error occurred! Please re-check email and password', {
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
    };

    useEffect(() => {
       // console.log('Token in Login:', token);
    }, [token]);

    return (
        <>
            <div className="login-container h-screen">
                <div className="login-content">
                    <div className="login-content_header">
                        <h2>Welcome, please sign-in!</h2>
                    </div>
                    <div>
                        <form className="login-form" onSubmit={sendOtp}>
                            <div>
                                <label htmlFor="email">Email ID</label>
                                <input type="email" id="phone" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="ex: someone@gmail.com"/>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input id='otpIn' type="password" name="password" placeholder="ex: Abcd231@" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <input type="submit" value="Submit" className='btn-lC'/>
                        </form>
                        <button className='sob' onClick={() => router.push("/Register")}>Sign-Up</button>
                    </div>
                </div>
                <div className="login-footer">
                    <p>Terms of use | Privacy policy</p>
                </div>
            </div>
        </>
    );
};

export default LoginOTP;



//ENV
// REACT_APP_API_KEY="https://scube.jsontech.in" PORT = 3001
