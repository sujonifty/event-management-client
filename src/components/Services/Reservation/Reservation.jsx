"use client"
import { Button, Dropdown, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Reservation = () => {
    const [email, setEmail] = useState('');
    return (

        <div
            className="h-screen flex justify-center items-center relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/2PZZ94w/w21.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // Enables the parallax effect
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-70"></div>

            {/* Hero content */}
            <div className="relative z-10 text-center">
                <div className="grid max-w-screen-xl grid-cols-1 justify-center gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2 mb-5">
                            
                            <h2 className="text-3xl font-bold leading-tight lg:text-5xl">Make <span className='text-orange-500'>Reservation</span></h2>
                            <div className="text-gray-400 mb-6">
                                Send your for Update news about event booking.
                            </div>
                        </div>
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/PrKGgxv/w24.jpg"
                            alt="bg picture"
                            width={500}
                            height={600}
                        />
                    </div>
                    <div className="space-y-6 ">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Contact to our platform</h3>
                        <div className=''>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <TextInput id="name" placeholder="Your Name" type="text" required />
                        </div>
                        <div>
                            <TextInput id="Guest" placeholder='Your Guests' type="text" required />
                        </div>
                        <div className='flex justify-between'>
                        <Dropdown className='w-full' label="Select event" dismissOnClick={false}>
                            <Dropdown.Item>Wedding</Dropdown.Item>
                            <Dropdown.Item>Birthday</Dropdown.Item>
                            <Dropdown.Item>Social</Dropdown.Item>
                            <Dropdown.Item>Corporate</Dropdown.Item>
                        </Dropdown>
                        <Dropdown label="Select event" dismissOnClick={false}>
                            <Dropdown.Item>Wedding</Dropdown.Item>
                            <Dropdown.Item>Birthday</Dropdown.Item>
                            <Dropdown.Item>Social</Dropdown.Item>
                            <Dropdown.Item>Corporate</Dropdown.Item>
                        </Dropdown>
                        </div>

                        <div className="w-full text-center">
                            <Button className='mx-auto w-3/5'>Subscribe</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;