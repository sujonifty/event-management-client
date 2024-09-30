"use client"
import { Button, Dropdown, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Reservation = () => {
    const [email, setEmail] = useState('');

    return (
        <div
            className="h-screen flex justify-center items-center relative overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url(https://i.ibb.co/2PZZ94w/w21.jpg)",
                backgroundAttachment: "fixed", // Enables the parallax effect
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

            {/* Hero content */}
            <div className="relative z-10 text-center">
                <div className=" grid max-w-screen-xl grid-cols-1 justify-center gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-800">
                            Make a <span className='text-orange-500'>Reservation</span>
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Stay updated with the latest event booking news.
                        </p>
                        <Image
                            className='mx-auto rounded-lg shadow-lg'
                            src="https://i.ibb.co.com/hCvgJp2/online.webp"
                            alt="Event image"
                            width={500}
                            height={600}
                        />
                    </div>
                    <div className="p-8 space-y-6 bg-slate-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800">Contact Our Platform</h3>
                        <div className="space-y-4">
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <TextInput
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                            <TextInput
                                id="guests"
                                type="number"
                                placeholder="Number of Guests"
                                required
                            />
                            <TextInput
                                id="date"
                                type="date"
                                placeholder="Add date"
                                required
                            />
                            <div className='flex justify-between'>
                                <Dropdown
                                    label="Select Your Event..."
                                    dismissOnClick={false}

                                >
                                    <Dropdown.Item>Wedding</Dropdown.Item>
                                    <Dropdown.Item>Birthday</Dropdown.Item>
                                    <Dropdown.Item>Social</Dropdown.Item>
                                    <Dropdown.Item>Corporate</Dropdown.Item>
                                </Dropdown>
                                <Dropdown
                                    label="Select Our Branch"
                                    dismissOnClick={false}

                                >
                                    <Dropdown.Item>Dhaka</Dropdown.Item>
                                    <Dropdown.Item>Rajshahi</Dropdown.Item>
                                    <Dropdown.Item>Chittagong</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button className='mx-auto w-full'>
                                Reservation
                            </Button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Reservation;
