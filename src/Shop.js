import React from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

const Shop = () => {
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
    );
};

export default Shop;
