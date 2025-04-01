import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Latest Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
