import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from '../../../assets/Images/TimelineImage.png'
const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Descrption: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Descrption: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Descrption: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Descrption: "The ability to switch is an important skills",
    }
]

export const TimelineSection = () => {
    return (
        <div className='flex gap-16 items-center'>
            <div className='flex flex-col w-[45%]'>
                {
                    timeline.map((element, index) => {
                        return (
                            <div className='flex gap-6' key={index}>
                                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={element.Logo} />
                                </div>
                                <div>
                                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                    <p className='text-base'>{element.Descrption}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='relative shadow-blue-200'>
                <img src={timelineImage} alt='time line image' className='shadow-white object-cover h-fit' />
                <div className='absolute bg-caribbeangreen-700 flex text-white uppercase py-7 left-[50%] translate-x-[-50%] 
                translate-y-[-50%]'>
                    <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>
                    <div className='flex gap-5 items-center px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm'>Type Of Courses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}