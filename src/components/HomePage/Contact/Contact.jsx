"use client"
import { Button, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
            <div className="flex flex-col justify-between">
                <div className="space-y-2 mb-5">
                    <h2 className="text-3xl font-bold leading-tight lg:text-4xl"><span className='text-orange-500'>HeartBond's</span> Updates!</h2>
                    <div className="text-gray-400 mb-6">
                        Send your for Update news about event booking.
                    </div>
                </div>
                <Image
                    className='mx-auto'
                    src="https://i.ibb.co.com/gwgxPdx/w21.png"
                    alt="bg picture"
                    width={500}
                    height={600}
                />	</div>
            <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Contact to our platform</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                        id="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Your Message" />
                    </div>
                    <TextInput id="message" type="text" required />
                </div>

                <div className="w-full">
                    <Button>Subscribe</Button>
                </div>

            </div>
        </div>
    );
};

export default Contact;