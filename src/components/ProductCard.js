import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    return (
        <Link to={`/product/${product.id}`} className="border rounded-lg p-4 hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-3 rounded"/>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-black font-medium mt-1">₹{product.price}</p>
        </Link>
    );
};

export default ProductCard;
