import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#eeeeee] text-sm text-black py-10 px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                {/* Left Section: Logo + Copyright */}
                <div className="md:w-1/3">
                    <h1 className="text-4xl font-bold tracking-widest mb-4">RE⟐FRAIN</h1>
                    <p>© 2024 REFR️AIN, ALL RIGHTS RESERVED</p>
                </div>

                {/* Center Section: Links */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Shipping and Delivery</a>
                    <a href="#" className="hover:underline">Terms and Conditions</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">Cancellation and Refund</a>
                    <a href="#" className="hover:underline">Loyalty Program</a>
                    <a href="#" className="hover:underline">Exchange/Return Request</a>
                </div>

                {/* Right Section: Currency Dropdown */}
                <div className="md:w-1/3 flex justify-start md:justify-end">
                    <select className="border border-black px-4 py-2 rounded-md">
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
