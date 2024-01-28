import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import React from 'react'
import { HighlightText } from "../components/core/HomePage/HighlightText";
import { HomeButton } from "../components/core/HomePage/HomeButton";
import Banner from "../assets/Images/banner.mp4"
import { CodeBlocks } from "../components/core/HomePage/CodeBlocks";
import { TimelineSection } from "../components/core/HomePage/TimelineSection";
import { LearningLanguageSection } from "../components/core/HomePage/LearningLanguageSection";
import { InstructorSection } from "../components/core/HomePage/InstructorSection";
import { ExploreMore } from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";

export const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
                <Link to={"/signup"}>
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instrcutor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future with <HighlightText text={"Coding Skills"} />
                </div>

                <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on-projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className="flex gap-7 mt-8">
                    <HomeButton active={true} linkTo={"/signup"}>
                        Learn More
                    </HomeButton>
                    <HomeButton active={false} linkTo={"/login"}>
                        Book a Demo
                    </HomeButton>
                </div>

                <div className="mx- my-14 shadow-blue-200">
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>


                {/* Code section 1 */}
                <div className="ml-4">
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock your <HighlightText text={"coding potential"} /> with our online courses
                            </div>
                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        button1={
                            {
                                btnText: "Try it Yourself",
                                linkTo: "/signup",
                                active: true,
                            }
                        }
                        button2={
                            {
                                btnText: "Learn More",
                                linkTo: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                {/* Code section 2 */}
                <div className="mr-4">
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Start <HighlightText text={"coding in seconds"} />
                            </div>
                        }
                        subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                        button1={
                            {
                                btnText: "Continue Lesson",
                                linkTo: "/signup",
                                active: true,
                            }
                        }
                        button2={
                            {
                                btnText: "Learn More",
                                linkTo: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n<linkrel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n</nav>`}
                        codeColor={"text-yellow-25"}
                    />
                </div>

                <ExploreMore />
            </div>

            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[333px]">
                    <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between">
                        <div className="h-[150px]">

                        </div>
                        <div className="flex flex-row gap-7">
                            <HomeButton active={true} linkTo={"/signup"}>
                                <div className="flex items-center gap-5">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </HomeButton>
                            <HomeButton active={false} linkTo={"/login"}>
                                <div>
                                    Learn More
                                </div>
                            </HomeButton>
                        </div>
                    </div>
                </div>

                <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-7">
                    <div className="flex flex-row gap-5 mt-[95px] mb-10">
                        <div className="font-inter text-4xl font-semibold w-[48%]">
                            Get the skills you need for a <HighlightText text={"job that is in demand."} />
                        </div>
                        <div className="flex flex-col gap-10 w-[45%] items-start">
                            <div className="text-[16px]">
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <HomeButton active={true} linkTo={"/signup"}>
                                Learn More
                            </HomeButton>
                        </div>
                    </div>
                    <TimelineSection />

                    <LearningLanguageSection />

                </div>
            </div>


            {/* Section 3 */}
            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-between gap-8 bg-richblack-900 text-white">
                <InstructorSection />

                <h2 className="text-center text-4xl font-semibold mt-10">Reviews from other learners</h2>

                {/* Review Slider */}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
