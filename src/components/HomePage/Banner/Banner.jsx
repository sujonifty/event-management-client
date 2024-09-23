"use client";
import React from 'react';
import { Carousel } from "flowbite-react";
import Image from 'next/image';
const Banner = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        
      <Image
      src="/logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </Carousel>
    </div>
    );
};

export default Banner;