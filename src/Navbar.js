import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
            <Link to="/" className="text-xl font-bold">Refrain</Link>
            <div className="flex gap-4">
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;
