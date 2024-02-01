import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { getPasswordResetToken } from '../services/operations/authAPI';

export const ForgotPassword = () => {
    const { loading } = useSelector((state) => state.auth);
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

    return (
        <div className='text-white flex justify-center items-center lg:h-[70vh] '>
            {
                loading ? (
                    <div className='spinner'></div>
                ) : (
                    <div className='lg:w-[25vw]'>
                        <h1 className='text-3xl font-semibold mb-4'>
                            {
                                !emailSent ? "Reset your password" : "Check email"
                            }
                        </h1>

                        <p className='text-richblack-200 mb-8'>
                            {
                                !emailSent ?
                                    "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" :
                                    `We have sent the reset email to ${email}`
                            }
                        </p>

                        <form onSubmit={handleOnSubmit}>
                            {
                                !emailSent &&
                                <label>
                                    <p className='text-richblack-25'>Email Address<sup className='text-red'>*</sup></p>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        placeholder='Enter Your Email Address'
                                        className='w-[100%] bg-richblack-800 h-[48px]'
                                    />
                                </label>
                            }
                            <div className='bg-yellow-50 mt-7 rounded-md text-black text-center py-3 text-[13px] font-bold'>
                                <button>
                                    {
                                        !emailSent ? ("Reset Password") : "Resend email"
                                    }
                                </button>
                            </div>
                        </form>
                        <div className='mt-7 text-richblack-50'>
                            <Link to="/login">
                                <div className='flex items-center'>
                                    <IoIosArrowRoundBack />
                                    <div>
                                        Back to login
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
