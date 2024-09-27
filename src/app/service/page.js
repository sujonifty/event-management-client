

export default function Home() {
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
                <div className="relative z-10 text-center  ">
                    <h1 className='text-5xl text-white'>Hello</h1>
                </div>
            </div>
    </div>
  );
}
