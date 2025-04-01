import React from "react";

const ShippingBanner = () => {
    return (
        <div className="bg-[#444] text-white overflow-hidden py-2">
            <div
                className="whitespace-nowrap animate-marquee flex gap-10 text-sm font-medium uppercase tracking-widest">
                {[...Array(10)].map((_, i) => (
                    <span key={i}>SHIPPING WORLDWIDE ·</span>
                ))}
            </div>
        </div>
    );
};

export default ShippingBanner;
