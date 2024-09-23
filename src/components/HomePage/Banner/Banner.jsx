"use client";
import React from 'react';
import { Carousel } from "flowbite-react";
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="h-56 sm:h-80 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/wMSNYfH/bg.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/9bST2sy/w.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/bz8N8z2/w3.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/K9HxJB3/w2.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/Y8bQsBb/w4.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/6J52Y3x/w5.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
        <Image
        className='bg-cover'
          src="https://i.ibb.co.com/h89ppv3/w6.jpg"
          alt="bg picture"
          width={500}
          height={500}
        />
      </Carousel>
    </div>
  );
};

export default Banner;