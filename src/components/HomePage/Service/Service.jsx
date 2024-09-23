"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from 'react';

const Service = () => {
    return (
        <section className="mx-auto mt-16">
            <div className="w-full p-4 md:w-4/5 mx-auto mb-10">
                <h5 className="text-4xl md:text-6xl mb-2 font-bold tracking-tight text-center  text-gray-600 dark:text-white">
                     <span className='text-orange-500'>HeartBond's</span> services
                </h5>
                <p className="text-wrap md:text-center mb-5 md:text-lg font-normal text-gray-700 dark:text-gray-400">
                We make your events smart & impactful by personalised event management services.
                 </p>
                <p className="text-wrap mb-10 md:text-center  font-normal text-gray-500 dark:text-gray-400">
                    <span className='md:block'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,</span> 
                    We offer full range of Events Management Services that scale to your needs & budget.
                </p>
            </div>
            <div className=" flex flex-col md:flex-row justify-center items-center ">
                <div className="space-y-12">
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/Y8bQsBb/w4.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Wedding events
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/Y8bQsBb/w4.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Birthday Parties
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
                <div className=" relative w-full md:w-2/5 lg:w-[33%] h-screen mx-10">
                    <Image
                        src="https://i.ibb.co.com/CJrm5cs/w8.jpg"
                        alt="bg picture"
                        layout="fill" 
                        objectFit="cover" />
                </div>
                <div className="space-y-12">
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/Y8bQsBb/w4.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Social events
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/Y8bQsBb/w4.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Corporate seminars
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Service;