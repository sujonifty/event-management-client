import React from 'react';

const Header = () => {
  return (
    <div
      className="h-32 md:h-64 flex justify-center items-center relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/JyN401J/s1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      {/* content */}
      <div className="relative z-10 text-center  ">
        <h1 className='text-3xl md:text-6xl font-bold uppercase text-white'>What we do-</h1>
      </div>
    </div>
  );
};

export default Header;