import React, {useEffect, useRef, useState} from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

// Sort and take top 10
const topTenProducts = [...products]
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 10);

const BestSellersScroll = () => {
    const [visibleCount, setVisibleCount] = useState(10);
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const {scrollLeft, scrollWidth, clientWidth} = container;
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                // Reached end, load more
                if (visibleCount < topTenProducts.length) {
                    setVisibleCount((prev) => Math.min(prev + 3, topTenProducts.length));
                }
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, [visibleCount]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Best Sellers</h2>

            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 scroll-smooth snap-x snap-mandatory"
            >
                {topTenProducts.slice(0, visibleCount).map((product) => (
                    <div
                        key={product.id}
                        className="min-w-[250px] snap-start flex-shrink-0"
                    >
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellersScroll;
