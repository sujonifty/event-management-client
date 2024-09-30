import { Card } from 'flowbite-react';
import React from 'react';
import { FaRegHandshake } from 'react-icons/fa';

const Management = () => {
    return (
        <section>
            <div className="w-full p-4 md:w-4/5 mx-auto my-10">
                <h5 className="text-4xl md:text-6xl mb-2 font-bold tracking-tight text-center  text-gray-600 dark:text-white">
                    Our <span className='text-orange-500'>Event Management</span>Specialists.
                </h5>
                <p className="text-wrap md:text-center md:text-lg font-normal text-gray-700 dark:text-gray-400">
                    <span className='md:block'>We make your events smart & impactful by personalised event management services.</span>
                    We offer full range of Events Management Services that scale to your needs & budget.
                </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto space-y-5 md:space-x-5'>
                <Card className="max-w-sm">
                    <div className='flex'>
                        <FaRegHandshake />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Wedding parties
                        </h5>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Holiday Parties
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Conference Planning
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Anniversaries
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Corporate Functions
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Birthday Parties
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Stage Decorations
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Fashion Concerts
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation
                    </p>
                </Card>
            </div>
        </section>

    );
};

export default Management;