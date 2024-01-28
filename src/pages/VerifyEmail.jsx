import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { FaClockRotateLeft } from "react-icons/fa6";
import { sendOtp, signUp } from '../services/operations/authAPI';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

export const VerifyEmail = () => {
    const { loading, signupData } = useSelector((state) => state.auth);
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    })
    function handleOnSubmit(e) {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate))
    }
    return (
        <div className='flex justify-center items-center flex-col h-[80vh] text-white'>
            {
                loading ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <div className='lg:w-[25vw]'>
                        <h1 className='text-3xl font-semibold mb-4'>Verify email</h1>
                        <p className='text-richblack-200 mb-8'>A verification code has been sent to you. Enter the code below</p>
                        <form onSubmit={handleOnSubmit}>
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                // renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} placeholder='-' />}
                                containerStyle={'bg-red flex justify-between w-[100%] h-[48px]'}
                                inputStyle={'w-[37px] h-[100%] text-black'}
                            />
                            <button type='submit' className='w-[100%] bg-yellow-50 mt-7 rounded-md text-black text-center py-3 text-[16px] font-bold'>
                                Verify email
                            </button>
                        </form>
                        <div className='flex justify-between'>
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
                            <div onClick={() => {
                                dispatch(sendOtp(signupData.email, navigate));
                            }} className='mt-7 flex text-blue-100 gap-2 cursor-pointer'>
                                <FaClockRotateLeft />
                                <div>Resend it</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
