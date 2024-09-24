"use client"
import Image from 'next/image';
import React from 'react';

const OurTeam = () => {
    return (
        <section className="py-6 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                <p className="max-w-2xl text-center text-gray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="text-gray-400">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <Image
                            className='mx-auto'
                            src="https://i.ibb.co.com/bvdQQ1k/w9.png"
                            alt="bg picture"
                            width={200}
                            height={200}
                        />				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="text-gray-400">Visual Designer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;