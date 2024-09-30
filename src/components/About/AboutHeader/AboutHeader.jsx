import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { RiPoliceBadgeFill } from "react-icons/ri";

const AboutHeader = () => {
    return (
        <div>
            <div
                className="h-32 md:h-64 flex justify-center items-center relative"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/NN6fpc2/anout.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-40"></div>
                {/* content */}
                
            </div>
            <div className=" grid max-w-screen-xl grid-cols-1 justify-center gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-bold leading-tight lg:text-4xl text-gray-600">
                        We Are Event Organizer Since 2011
                    </h2>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Best Quality Services
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">100% Satisfaction Guarantee
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Highly Professional Team
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Commitment to Customers</span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Quality Control System</span>
                        </li>
                    </ul>

                    <Button className='w-full md:w-2/5'>Learn More</Button>
                </div>
                <div
                    className=" flex justify-center items-center relative rounded-lg"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/BzLvw56/Event-Planning.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
                    {/* content */}
                    <div className="relative z-10 space-y-5 flex flex-col justify-center items-center  ">
                        < RiPoliceBadgeFill className='text-7xl text-yellow-400 mx-auto' />

                        <h1 className='text-xl md:text-5xl font-bold uppercase text-white'>10 +</h1>
                        <h1 className='text-2xl md:text-3xl font-bold uppercase text-white'>Years Of Experiences</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;