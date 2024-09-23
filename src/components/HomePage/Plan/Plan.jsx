"use client";
import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const Plan = () => {
    return (
        <section className="py-6">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

                <div className="flex justify-center items-center w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square">
                    <div className='max-w-lg space-y-8'>
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/7GpfhDP/w13.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />
                        <h5 className="mb-2 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            <span className='md:block'>Let’s Plan Your Next</span>
                            Event Together.
                        </h5>
                        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                            Stay up to date and move work forward with HeartBond.
                        </p>
                        <Button>Learn more..</Button>
                    </div>
                </div>

                <Card className="max-w-sm ">
                    <Image
                        className='mx-auto'
                        src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                        alt="bg picture"
                        width={200}
                        height={200}
                    />
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-600 dark:text-white">
                        Social events
                    </h5>
                </Card>
                <Card className="max-w-sm ">
                    <Image
                        className='mx-auto'
                        src="https://i.ibb.co.com/FDFj6f1/w10.png"
                        alt="bg picture"
                        width={200}
                        height={200}
                    />
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-600 dark:text-white">
                        Social events
                    </h5>
                </Card>
                <Card className="max-w-sm ">
                    <Image
                        className='mx-auto'
                        src="https://i.ibb.co.com/RbFXzKw/w11.png"
                        alt="bg picture"
                        width={200}
                        height={200}
                    />
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-600 dark:text-white">
                        Social events
                    </h5>
                </Card>
                <Card className="max-w-sm ">
                    <Image
                        className='mx-auto'
                        src="https://i.ibb.co.com/zXQyqZ3/w12.png"
                        alt="bg picture"
                        width={200}
                        height={200}
                    />
                    <h5 className="text-2xl text-center font-bold tracking-tight text-gray-600 dark:text-white">
                        Social events
                    </h5>
                </Card>
            </div>
        </section >
    );
};

export default Plan;