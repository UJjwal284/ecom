import React from "react";
import {Link} from "react-router-dom";
import ProductGrid from "./components/ProductGrid";
import BestSellersGrid from "./components/BestSellersScroll";
import OurStorySection from "./components/OurStorySection";
import ShippingBanner from "./components/ShippingBanner";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="text-center py-10 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Artistic Refrains in Your Lifestyle</h1>
                <p className="text-lg mb-6">Oversized Tees | Hoodies | Streetwear</p>
                <Link to="/shop" className="px-6 py-3 bg-black text-white rounded-full">
                    Explore Shop
                </Link>
            </div>

            <ProductGrid/>

            <div className="text-center mt-6">
                <Link to="/shop" className="inline-block px-6 py-2 bg-gray-900 text-white rounded-full">
                    View All Products
                </Link>
            </div>

            {/* Promo GIF */}
            <div className="relative mt-10">
                <img
                    src="main.gif"
                    alt="gif"
                    className="w-full h-[300px] md:h-[500px] object-cover rounded"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="refrain7.png"
                        alt="logo"
                        className="w-20 h-20 md:w-30 md:h-30 animate-heartbeat drop-shadow-lg"
                    />
                </div>
            </div>

            {/* Best Sellers Section */}
            <BestSellersGrid/>
            <ShippingBanner/>

            <OurStorySection/>
        </div>
    );
};

export default Home;
