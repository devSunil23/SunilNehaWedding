import React from "react";
import sunilprofile1 from "../images/sunilprofile2.jpg";
import nehaprofile1 from "../images/nehaprofile3.jpg";
function Couple() {
    return (
        <div className="min-h-screen py-16 px-3">
            <div className="text-md font-normal text-center">
                <span className="bg-clip-text mt-2 font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    With the blessings of dear ones, A new journey is beginning.
                </span>
            </div>

            <div className="text-md text-center mt-3 mb-0 font-normal break-words text-brown-250 leading-relaxed">
                In your smile resides brightness,
                <p>Let's share the story of this love.</p>
            </div>

            <div className="flex flex-auto justify-center w-36 mx-auto inset-1">
                <img
                    className="w-32 mx-auto my-4 shadow-xl rounded-full drop-shadow-sm"
                    src={nehaprofile1}
                    alt="profile neha"
                />
            </div>

            <div className="text-xl font-extrabold text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Neha Kumari
                    <p className="bg-clip-text text-md-24 mt-1 font-bold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400">
                        {" "}
                        (Neha)
                    </p>
                </span>
                <p className="text-sm mt-2 font-normal italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    Daughter of Vijay Kumar & Shanti Devi
                </p>
            </div>

            <div className="text-2xl font-extrabold text-center mt-9">
                <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-white to-violet-500">
                    &
                </span>
            </div>

            <div className="flex flex-auto justify-center w-36 mx-auto">
                <img
                    className="w-32 mx-auto my-4 shadow-xl rounded-full drop-shadow-sm"
                    src={sunilprofile1}
                    alt="profile neha"
                />
            </div>
            <div className="text-xl font-extrabold text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Sunil Kumar
                    <p className="bg-clip-text text-md-24 mt-1 font-semibold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400">
                        {" "}
                        (Sunil)
                    </p>
                </span>
                <p></p>
                <p
                    className="text-sm font-normal mt-2 mb-0 
                italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    Son of ShivKrishna & Indumati
                </p>
            </div>
        </div>
    );
}

export default Couple;
