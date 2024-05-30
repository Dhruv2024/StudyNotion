import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { IconBtn } from '../../common/IconBtn';
import { FaRegEdit } from "react-icons/fa";
import { formattedDate } from '../../../utils/dateFormatter';

export const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    console.log("PRINTING USER DETAILS....")
    console.log(user);
    return (
        <div>
            <h1 className='mb-14 text-3xl font-medium text-richblack-5'>
                My Profile
            </h1>
            {/* section 1 */}
            <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 lg:flex-row flex-col gap-3">
                <div className="flex items-center gap-x-4">
                    <img src={`${user?.image}`} alt={`profile of ${user.firstName}`}
                        className="aspect-square w-[78px] rounded-full object-cover" />
                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-richblack-5">{user.firstName + " " + user.lastName}</p>
                        <p className="text-sm text-richblack-300">{user.email}</p>
                    </div>
                </div>
                <IconBtn
                    text="Edit"
                    onclick={() => {
                        navigate("/dashboard/settings")
                    }}
                >
                    <FaRegEdit />
                </IconBtn>
            </div>

            {/* section 2 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">About</p>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }}
                    >
                        <FaRegEdit />
                    </IconBtn>
                </div>
                <p
                    className={`${user?.additionalDetails?.about
                        ? "text-richblack-5"
                        : "text-richblack-400"
                        } text-sm font-medium`}> {user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
            </div>

            {/* section 3 */}
            <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
                <div className="flex w-full items-center justify-between">
                    <p className="text-lg font-semibold text-richblack-5">Personal Details</p>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }}
                    >
                        <FaRegEdit />
                    </IconBtn>
                </div>
                {/* for big screen */}
                <div className="lg:flex max-w-[500px] justify-between hidden">
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <p className="mb-2 text-sm text-richblack-300">First Name</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.firstName}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-300">Email</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.email}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-300">Gender</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.additionalDetails?.gender ?? (
                                    <div className='text-richblack-400'>
                                        Add Gender
                                    </div>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <p className="mb-2 text-sm text-richblack-300">Last Name</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.lastName}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-300">Phone Number</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {user?.additionalDetails?.contactNumber ?? (
                                    <div className='text-richblack-400'>
                                        Add Contact Number
                                    </div>
                                )}
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm text-richblack-300">Date Of Birth</p>
                            <p className="text-sm font-medium text-richblack-5">
                                {
                                    user?.additionalDetails?.dateOfBirth ? (
                                        formattedDate(user?.additionalDetails?.dateOfBirth)
                                    ) : (
                                        <div className='text-richblack-400'>
                                            Add Date Of Birth
                                        </div>
                                    )
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {/* for small screen */}
                <div className="flex max-w-[500px] justify-between lg:hidden flex-col gap-8">
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">First Name</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.firstName}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Email</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.email}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Gender</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.additionalDetails?.gender ?? (
                                <div className='text-richblack-400'>
                                    Add Gender
                                </div>
                            )}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Last Name</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.lastName}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Phone Number</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.additionalDetails?.contactNumber ?? (
                                <div className='text-richblack-400'>
                                    Add Contact Number
                                </div>
                            )}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-300">Date Of Birth</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {
                                user?.additionalDetails?.dateOfBirth ? (
                                    formattedDate(user?.additionalDetails?.dateOfBirth)
                                ) : (
                                    <div className='text-richblack-400'>
                                        Add Date Of Birth
                                    </div>
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>

        </div >
    )
}
