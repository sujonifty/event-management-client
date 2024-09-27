"use client"
import { Card, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const OurTeam = () => {
    return (
        <section className="py-6 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">

                <div className="w-full p-4 bg-cyan-50  mx-auto mb-10">
                    <h5 className="text-4xl md:text-6xl mb-2 font-bold tracking-tight text-center  text-gray-600 dark:text-white">
                        Our <span className='text-orange-500'>team</span>
                    </h5>
                    <p className="text-wrap md:text-center mb-5 md:text-lg font-normal text-gray-700 dark:text-gray-400">
                        We make your events smart & impactful by personalised event management services.
                    </p>
                    <p className="text-wrap mb-10 md:text-center  font-normal text-gray-500 dark:text-gray-400">
                        <span className='md:block'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,</span>
                        We offer full range of Events Management Services that scale to your needs & budget.
                    </p>
                </div>
                
                <div className="flex flex-row flex-wrap-reverse justify-center gap-10">
                <Card className="max-w-sm w-full md:w-1/5">
                        <div className="flex justify-end px-4 pt-4">
                            <Dropdown inline label="">
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaSquareTwitter />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaInstagramSquare />

                                    </a>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                alt="Bonnie image"
                                height="96"
                                src="https://i.ibb.co.com/fvgyYWk/t2.png"
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 mx-auto lg:mt-6">

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-md w-full md:w-1/5">
                        <div className="flex justify-end px-4 pt-4">
                            <Dropdown inline label="">
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaSquareTwitter />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaInstagramSquare />

                                    </a>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                alt="Bonnie image"
                                height="96"
                                src="https://i.ibb.co.com/P5M7KPh/t1.jpg"
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 mx-auto lg:mt-6">

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-md w-full md:w-1/5">
                        <div className="flex justify-end px-4 pt-4">
                            <Dropdown inline label="">
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaSquareTwitter />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaInstagramSquare />

                                    </a>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                alt="Bonnie image"
                                height="96"
                                src="https://i.ibb.co.com/HKGpSzP/t3.png"
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 mx-auto lg:mt-6">

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-md w-full md:w-1/5">
                        <div className="flex justify-end px-4 pt-4">
                            <Dropdown inline label="">
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaSquareTwitter />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaInstagramSquare />

                                    </a>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                alt="Bonnie image"
                                height="96"
                                src="https://i.ibb.co.com/tcYd8Cw/t4.png"
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 mx-auto lg:mt-6">

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-md w-full md:w-1/5">
                        <div className="flex justify-end px-4 pt-4">
                            <Dropdown inline label="">
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaSquareTwitter />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaInstagramSquare />

                                    </a>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                alt="Bonnie image"
                                height="96"
                                src="https://i.ibb.co.com/QHM69bF/t5.png"
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 mx-auto lg:mt-6">

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                    <Card className="max-w-md w-full md:w-1/5">
                        <div className="flex justify-end px-4 pt-4">
                            <Dropdown inline label="">
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaFacebook />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaSquareTwitter />
                                    </a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <FaInstagramSquare />

                                    </a>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <Image
                                alt="Bonnie image"
                                height="96"
                                src="https://i.ibb.co.com/zRZJykq/t6.jpg"
                                width="96"
                                className="mb-3 rounded-full shadow-lg"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 mx-auto lg:mt-6">

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    Message
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;