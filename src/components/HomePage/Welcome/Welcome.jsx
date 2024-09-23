import { Button, Card } from 'flowbite-react';
import React from 'react';

const Welcome = () => {
    return (
        <section>
            <div className="w-full p-4 md:w-4/5 mx-auto mb-10">
                <h5 className="text-6xl mb-2 font-bold tracking-tight text-center  text-gray-600 dark:text-white">
                    Welcome To <span className='text-orange-500'>HeartBond</span>
                </h5>
                <p className="text-center text-lg font-normal text-gray-700 dark:text-gray-400">
                    From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions,<br /> We offer full range of Events Management Services that scale to your needs & budget.
                </p>
            </div>
            <div className='flex justify-center items-center mx-auto space-y-4 md:space-x-10'>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Great Services
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation                    </p>
                    <Button>
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Great people
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation                    </p>
                    <Button>
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Card>
                <Card className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                        Great ideas
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Corem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation                    </p>
                    <Button>
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </Card>
            </div>
        </section>
    );
};

export default Welcome;