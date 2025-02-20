import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white text-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">GuTeach Exam Store</Link>
        <Link to="/cart" className="flex items-center gap-2">
          <ShoppingCart size={24} />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;