import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;