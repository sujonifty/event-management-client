"use client";

import Image from "next/image";
import React from 'react';

const UpComingEvent = () => {
    return (
        <div>
            <div className="w-full mx-auto p-4 lg:p-8 md:w-4/5 mt-16">
                <h5 className="text-4xl md:text-6xl mb-2 font-bold tracking-tight t text-gray-600 dark:text-white">
                    <span className='text-orange-500'>HeartBond's</span> Upcoming Events
                </h5>
                <p className="text-wrap mb-5 md:text-lg font-normal text-gray-700 dark:text-gray-400">
                    We make your events smart & impactful by personalised event management services.
                </p>
            </div>


            <section className="p-4 lg:p-8 ">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <Image
                            className='bg-cover'
                            src="https://i.ibb.co.com/2PZZ94w/w21.jpg"
                            alt="bg picture"
                            width={500}
                            height={500}
                        />			
                        <div className="flex flex-col justify-center flex-1 space-y-4 p-6 bg-gray-200">
                            <span className="text-xs uppercase text-gray-600">Upcoming event</span>
                            <h3 className="text-3xl font-bold">Wedding Event</h3>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Savar, Dhaka-1406</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                                </svg>
                                <span>September 28,2024, 9.00 AM</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <Image
                            className='bg-cover'
                            src="https://i.ibb.co.com/41zvdty/b1.jpg"
                            alt="bg picture"
                            width={500}
                            height={500}
                        />		
                        	<div className="flex flex-col justify-center flex-1 space-y-4 p-6 bg-gray-200">
                            <span className="text-xs uppercase text-gray-600">Upcoming party</span>
                            <h3 className="text-3xl font-bold">Birthday Function</h3>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Savar, Dhaka-1406</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                                </svg>
                                <span>September 28,2024, 9.00 AM</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <Image
                            className='bg-cover'
                            src="https://i.ibb.co.com/TtXzCHq/w25.jpg"
                            alt="bg picture"
                            width={500}
                            height={500}
                        />			
                        <div className="flex flex-col justify-center flex-1 space-y-4 p-6 bg-gray-200">
                            <span className="text-xs uppercase text-gray-600">Upcoming event</span>
                            <h3 className="text-3xl font-bold">Social Function</h3>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Savar, Dhaka-1406</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM4 8h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" clipRule="evenodd"></path>
                                </svg>
                                <span>September 28,2024, 9.00 AM</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div
        className="h-32 md:h-64 flex justify-center items-center relative"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/JyN401J/s1.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        {/* Hero content */}
        <div className="relative z-10 text-center  ">
          <h1 className='text-xl md:text-3xl font-bold uppercase text-white'>With a full range of Event Planning Services, our Clients have Successful & Prosperous Events!</h1>
        </div>
      </div>
        </div>
    );
};

export default UpComingEvent;