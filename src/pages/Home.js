import React from "react";
import neha from "../images/nehaprofile3.jpg";
import sunil from "../images/sunilprofile3.jpg";

function Home() {
    return (
        <div className="min-h-screen sm:text-left flex items-center justify-center">
            <div className="relative h-32 w-32 m-2 ...">
                <div className="absolute h-14 w-14 -left-4 -top-4 ..."></div>
                <img
                    className="w-32 mx-auto drop-shadow-sm"
                    src={neha}
                    alt="profile neha"
                />
            </div>
            <div className=""></div>
            <div className="m-2">
                <img
                    className="w-32 h-auto mx-auto drop-shadow-sm"
                    src={sunil}
                    alt="profile sunil"
                />
            </div>
        </div>
    );
}

export default Home;
