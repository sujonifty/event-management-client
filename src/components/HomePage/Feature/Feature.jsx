import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const Feature = () => {
    return (
        <div>
            <div
                className="h-screen flex justify-center items-center relative"
                style={{
                    backgroundImage:
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Hero content */}
                <div className="relative z-10 text-center  max-w-md">
                    <section className="my-8 ">
                        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                            <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                        </div>
                        
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Feature;