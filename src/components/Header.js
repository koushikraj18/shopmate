import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link,NavLink } from 'react-router-dom';

export const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem('cart');
        const parsed = raw ? JSON.parse(raw) : [];
        setCount(Array.isArray(parsed) ? parsed.length : 0);
      } catch (e) {
        setCount(0);
      }
    };

    read();
    const handler = () => read();
    window.addEventListener('cartUpdated', handler);
    return () => window.removeEventListener('cartUpdated', handler);
  }, []);

  return (
     <header className="h-28 sm:h-16 border-b-2 border-b-gray-200 mx-20 mb-10">
      <div className="flex justify-between items-center py-2 mx-2 max-sm:flex-col ">
        <Link to='/' className="flex items-center">
          <img className="w-12" src={Logo} alt="logo"/>
          <span className="text-lg ml-2">Shopping</span>
        </Link>
        <nav className="max-sm:my-3">
          <NavLink to='/' className="m-2 text-lg hover:cursor-pointer hover:bg-gray-200 hover:rounded p-2">Home</NavLink>
          <NavLink to='/cart' className="m-2 text-lg hover:cursor-pointer hover:bg-gray-200 hover:rounded p-2">Cart</NavLink>
        </nav>
        <div>
          <Link to='/cart' className='m-2 text-lg'>Cart:{count}</Link>
        </div>
      </div>
    </header>
  )
}
