
import {useTitle} from '../hooks/useTitle.js';
import React, { useEffect, useState } from 'react';

export const Cart = () => {
  const [items, setItems] = useState([]);
  useTitle("cart");

  useEffect(() => {
    const raw = localStorage.getItem('cart');
    try {
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      setItems([]);
    }
  }, []);

  const removeItem = (index) => {
    const next = items.filter((_, i) => i !== index);
    setItems(next);
    localStorage.setItem('cart', JSON.stringify(next));
    // notify other components (Header) the cart changed
    try {
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (e) {
      // ignore
    }
  };

  return (
    <section className="mx-6">
      <div className="text-center text-4xl font-bold my-6">Cart items: {items.length}</div>

      {items.length === 0 ? (
        <div className="text-center text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="grid gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border p-4 rounded-md">
              
                <img src={item.img || item.image || ''} alt={item.name || 'product'} className="w-40  object-cover rounded mr-4" />
                  <div className="font-semibold text- xl">{item.name || item.title || 'Product'}</div>
                  <div className="text-gray-800">${item.price ?? item.cost ?? ''}</div>

              <div>
                <button
                  onClick={() => removeItem(idx)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

