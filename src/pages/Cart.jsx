import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setShowCheckoutMessage(true);
  };

  if (showCheckoutMessage) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you for your purchase!</h2>
        <p className="text-xl">Your order has been confirmed and will be processed shortly.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <div className="text-xl font-bold mb-4">
              Total: ${total.toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;