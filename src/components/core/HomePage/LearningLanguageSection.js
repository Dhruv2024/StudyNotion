import React from 'react'
import { HighlightText } from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import { HomeButton } from './HomeButton'
export const LearningLanguageSection = () => {
    return (
        <div className='mt-[120px] mb-32'>
            <div className='flex flex-col gap-5 items-center'>

                <div className='text text-4xl font-semibold text-center'>
                    Your swiss knife for <HighlightText text={"learning any language"} />
                </div>

                <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[75%]'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className='flex items-center justify-center mt-5'>
                    <img
                        src={know_your_progress}
                        alt="KnowYourProgress"
                        className='object-contain -mr-32'
                    />
                    <img
                        src={compare_with_others}
                        alt="CompareWithOthers"
                        className='object-contain'
                    />
                    <img
                        src={plan_your_lessons}
                        alt="PlanYourLessons"
                        className='object-contain -ml-36'
                    />
                </div>

                <div className='w-fit'>
                    <HomeButton active={true} linkTo={"/signup"}>
                        Learn More
                    </HomeButton>
                </div>
            </div>
        </div>
    )
}
