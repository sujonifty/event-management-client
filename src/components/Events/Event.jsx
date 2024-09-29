import { Card } from 'flowbite-react';
import React from 'react';

const Event = () => {
    return (
        <section className="mx-auto mt-16  relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/2PZZ94w/w21.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // Enables the parallax effect
            }}
        >
            <div className="absolute inset-0 bg-white bg-opacity-70">
                {/* Background overlay */}
            </div>
            <div className="mx-auto relative z-10 text-center">
                <div className="w-full p-4 bg-cyan-50  mx-auto mb-10">
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
                <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center ">

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
                        imgSrc="https://i.ibb.co.com/fGspm7B/birthday.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Birthday Parties
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>

                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/qxg60bL/social-event.jpg"
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
                        imgSrc="https://i.ibb.co.com/JnjxVKZ/samenar.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Corporate seminars
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
                            Wedding events
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/fGspm7B/birthday.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Birthday Parties
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>

                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/qxg60bL/social-event.jpg"
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
                        imgSrc="https://i.ibb.co.com/JnjxVKZ/samenar.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Corporate seminars
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
                            Wedding events
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/fGspm7B/birthday.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Birthday Parties
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>

                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/qxg60bL/social-event.jpg"
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
                        imgSrc="https://i.ibb.co.com/JnjxVKZ/samenar.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Corporate seminars
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
                            Wedding events
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/fGspm7B/birthday.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Birthday Parties
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>

                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/qxg60bL/social-event.jpg"
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
                        imgSrc="https://i.ibb.co.com/JnjxVKZ/samenar.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Corporate seminars
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
                            Wedding events
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/fGspm7B/birthday.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                            Birthday Parties
                        </h5>
                        <p className="font-normal text-gray-400 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>

                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co.com/qxg60bL/social-event.jpg"
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
                        imgSrc="https://i.ibb.co.com/JnjxVKZ/samenar.jpg"
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

export default Event;