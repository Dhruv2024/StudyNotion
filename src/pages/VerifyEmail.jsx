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
                    <div className='spinner'>
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
                            <button type='submit'
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50">
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
