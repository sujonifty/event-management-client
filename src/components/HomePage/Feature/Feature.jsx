import { Button, Card, Carousel } from 'flowbite-react';

import React from 'react';

const Feature = () => {
    return (
        <div
            className="h-screen flex justify-center items-center relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // Enables the parallax effect
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* content */}
            <div className="relative z-10 text-center">
                <div className="flex justify-center items-center my-4 lg:my-16 flex-col md:flex-row gap-4 sm:h-64 xl:h-80 2xl:h-96">
                    <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                        <h1 className="p-4 text-3xl md:text-4xl font-bold text-gray-100 leading-none text-center">
                            What our customers are saying about Services
                        </h1>
                    </div>

                    {/* Horizontal Carousel */}
                    <Carousel
                        indicators={true} // Show carousel indicators
                        autoPlay={true} // Auto-slide the carousel
                        infiniteLoop={true} // Infinite looping
                        interval={3000} // Adjust time interval between slides
                        showThumbs={false} // Hide thumbnail navigation
                        showStatus={false} // Hide status (e.g., 1/3 slide)
                        swipeable={true} // Enable swipe gestures
                    >
                        <div className="container flex flex-col items-center justify-center mx-auto p-2">
                            <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">Exceeding services!</h1>
                        </div>
                        <div className="container flex flex-col items-center justify-center mx-auto p-2">
                            <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">Excellent quality!</h1>
                        </div>
                        <div className="container flex flex-col items-center justify-center mx-auto p-2">
                            <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">Highly recommend!</h1>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>


    );
};

export default Feature;