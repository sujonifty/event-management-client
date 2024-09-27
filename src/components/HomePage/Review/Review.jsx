import { Card, Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const Review = () => {
    return (
        <div className='my-4 lg:my-16'>
            <div className="w-full p-4  bg-cyan-50  mx-auto mb-10">
                    <h5 className="text-4xl md:text-6xl mb-2 font-bold tracking-tight text-center  text-gray-600 dark:text-white">
                        Our Customer's <span className='text-orange-500'>Reviews</span>
                    </h5>
                    <p className="text-wrap mb-10 md:text-center  font-normal text-gray-500 dark:text-gray-400">
                        <span className='md:block'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,</span>
                        We offer full range of Events Management Services that scale to your needs & budget.
                    </p>
                </div>
            <div className="flex  flex-col md:flex-row gap-4 sm:h-64 xl:h-80 2xl:h-96">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl md:text-5xl font-bold text-gray-600 leading-none text-center">What our customers are saying about us</h1>
                </div>
                <Carousel indicators={false}>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly p-2">
                        <Card className=" flex flex-col max-w-sm shadow-lg">
                            <div className="px-2 py-6 rounded-t-lg">
                                <p className="relative px-6 py-1 text-lg italic text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in quod officiis dolor dicta vitae.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-b-lg bg-cyan-50 text-gray-600">
                                <Image
                                    className='mx-auto rounded-full border -mt-16'
                                    src="https://i.ibb.co.com/Ykfr2zF/w19.png"
                                    alt="bg picture"
                                    width={100}
                                    height={100}
                                />
                                <p className="text-xl font-semibold leading-tight">Mr. Harry</p>
                                <p className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-2 sm:mr-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Savar, Dhaka-1406</span>
                                </p>

                                {/* Client Review Rating */}
                                <div className="flex mt-4">
                                    {/* Star 1 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 2 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 3 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 4 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 5 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>


                    </div>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly p-2">
                        <Card className=" flex flex-col max-w-sm shadow-lg">
                            <div className="px-2 py-6 rounded-t-lg">
                                <p className="relative px-6 py-1 text-lg italic text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in quod officiis dolor dicta vitae.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-b-lg bg-cyan-50 text-gray-600">
                                <Image
                                    className='mx-auto rounded-full border -mt-16'
                                    src="https://i.ibb.co.com/Ykfr2zF/w19.png"
                                    alt="bg picture"
                                    width={100}
                                    height={100}
                                />
                                <p className="text-xl font-semibold leading-tight">Mr. Harry</p>
                                <p className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-2 sm:mr-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Savar, Dhaka-1406</span>
                                </p>

                                {/* Client Review Rating */}
                                <div className="flex mt-4">
                                    {/* Star 1 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 2 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 3 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 4 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 5 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>


                    </div>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly p-2">
                        <Card className=" flex flex-col max-w-sm shadow-lg">
                            <div className="px-2 py-6 rounded-t-lg">
                                <p className="relative px-6 py-1 text-lg italic text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in quod officiis dolor dicta vitae.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-b-lg bg-cyan-50 text-gray-600">
                                <Image
                                    className='mx-auto rounded-full border -mt-16'
                                    src="https://i.ibb.co.com/Ykfr2zF/w19.png"
                                    alt="bg picture"
                                    width={100}
                                    height={100}
                                />
                                <p className="text-xl font-semibold leading-tight">Mr. Harry</p>
                                <p className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-2 sm:mr-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Savar, Dhaka-1406</span>
                                </p>

                                {/* Client Review Rating */}
                                <div className="flex mt-4">
                                    {/* Star 1 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 2 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 3 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 4 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 5 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>


                    </div>
                    <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly p-2">
                        <Card className=" flex flex-col max-w-sm shadow-lg">
                            <div className="px-2 py-6 rounded-t-lg">
                                <p className="relative px-6 py-1 text-lg italic text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis in quod officiis dolor dicta vitae.
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 rounded-b-lg bg-cyan-50 text-gray-600">
                                <Image
                                    className='mx-auto rounded-full border -mt-16'
                                    src="https://i.ibb.co.com/Ykfr2zF/w19.png"
                                    alt="bg picture"
                                    width={100}
                                    height={100}
                                />
                                <p className="text-xl font-semibold leading-tight">Mr. Harry</p>
                                <p className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5 mr-2 sm:mr-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Savar, Dhaka-1406</span>
                                </p>

                                {/* Client Review Rating */}
                                <div className="flex mt-4">
                                    {/* Star 1 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 2 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 3 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 4 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                    {/* Star 5 */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-yellow-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27l6.18 3.73-1.64-7.03L21 8.63l-7.19-.61L12 2 10.19 8.02 3 8.63l5.46 5.34-1.64 7.03L12 17.27z" />
                                    </svg>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;