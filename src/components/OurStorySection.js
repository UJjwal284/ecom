import React from "react";

const OurStorySection = () => {
    return (
        <div className="flex flex-col md:flex-row bg-white ">
            {/* Left Black Box with "Our Story" */}
            <div className="bg-black text-white flex items-center justify-center w-full md:w-2/5 h-64 md:h-auto">
                <h2 className="text-4xl font-bold text-center leading-tight">Our<br/>Story</h2>
            </div>

            {/* Right Text Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-10 mt-6 md:mt-0">
                <p className="text-lg text-gray-900 leading-7 py-24 px-10">
                    Refrain is more than a clothing brand—it's a platform for self-expression through bold, artistic
                    designs.
                    We fuse fashion and creativity to offer apparel that captures the essence of urban culture and
                    individuality.
                    With a focus on innovation and sustainability, Refrain delivers unique collections that inspire
                    confidence
                    and push the boundaries of streetwear. Our goal is to build a community of people who see fashion as
                    a
                    canvas for their artistic spirit.
                </p>
            </div>
        </div>
    );
};

export default OurStorySection;
