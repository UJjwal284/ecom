import React, {useState} from "react";
import {useParams} from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    if (!product) return <p className="p-6">Product not found.</p>;

    return (
        <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-10">
            {/* Image & thumbnails */}
            <div className="md:w-1/2">
                <img
                    src={`${product.image}`}
                    alt={product.name}
                    className="w-full rounded border"
                />

                {/* Optional thumbnail strip (mock for now) */}
                <div className="flex gap-2 mt-4">
                    <img
                        src={`${product.image}`}
                        alt="thumb"
                        className="w-16 h-16 border rounded object-cover"
                    />
                    <img
                        src={`${product.image}`}
                        alt="thumb"
                        className="w-16 h-16 border rounded object-cover"
                    />
                </div>

                {/* Long Description */}
                <p className="text-sm text-gray-700 mt-6 leading-6">
                    Step into the sleek world of opulence and intrigue with this oversized T-shirt, featuring a
                    captivating print inspired by The Weeknd’s Starboy...
                    {/* Add full description here or use product.descriptionLong */}
                </p>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-xl font-semibold text-gray-900 mb-4">₹{product.price}</p>

                {/* Size Selector */}
                <label className="block text-sm font-medium mb-1">Size *</label>
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="border border-gray-400 rounded px-4 py-2 mb-4 w-full"
                >
                    <option value="">Select</option>
                    {product.sizes.map((size) => (
                        <option key={size}>{size}</option>
                    ))}
                </select>

                {/* Quantity */}
                <label className="block text-sm font-medium mb-1">Quantity *</label>
                <div className="flex items-center mb-4">
                    <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="border px-3 py-1"
                    >−
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="border px-3 py-1"
                    >+
                    </button>
                </div>

                {/* Add to Cart / Buy Now */}
                <div className="flex gap-2 mb-4">
                    <button className="bg-gray-800 text-white px-6 py-2 rounded w-1/2">
                        Add to Cart
                    </button>
                    <button className="bg-black text-white px-6 py-2 rounded w-1/2">
                        Buy Now
                    </button>
                </div>

                {/* Wishlist Heart Icon */}
                <button className="text-gray-600 text-xl">♡</button>

                {/* Details */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-2">Details</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li><strong>Color:</strong> Purple</li>
                        <li><strong>Fabric:</strong> 100% Super Combed Cotton</li>
                        <li><strong>GSM:</strong> 240 GSM</li>
                        <li><strong>Quality:</strong> Bio-Washed & Pre-Shrunk</li>
                        <li><strong>Fit:</strong> Unisex Oversized Fit</li>
                        <li><strong>Neckline:</strong> Lycra Ribbed Neck</li>
                    </ul>
                </div>

                {/* Reviews */}
                <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                    {product.reviews.length === 0 ? (
                        <div>
                            <p>No Reviews Yet</p>
                            <p className="text-sm text-gray-600">Be the first to leave a review.</p>
                            <button className="mt-2 px-4 py-2 border rounded">Leave a Review</button>
                        </div>
                    ) : (
                        <ul className="space-y-2">
                            {product.reviews.map((r, i) => (
                                <li key={i} className="border p-3 rounded">
                                    <p className="font-semibold">{r.user}</p>
                                    <p className="text-sm">{r.comment}</p>
                                    <p className="text-yellow-500 text-sm">Rating: {r.rating}★</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
