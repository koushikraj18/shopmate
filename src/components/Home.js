import Product from '../assets/product.jfif';
import {useTitle} from '../hooks/useTitle.js';

export const Home = () => {
  const addToCart = (product) => {
    try {
      const raw = localStorage.getItem('cart');
      const arr = raw ? JSON.parse(raw) : []; 
      arr.push(product);
      localStorage.setItem('cart', JSON.stringify(arr));
      window.dispatchEvent(new Event('cartUpdated'));
    } catch (e) {
      // ignore JSON errors
    }
  };
  useTitle("Home");

  const products =[
          { id: 1, img: Product, name: 'Sony WH-1000XM4 Bluetooth', price: 1479 },
          { id: 2, img: Product, name: 'Sony WH-1000XM4 Air pro', price: 1889 },
          { id: 3, img: Product, name: 'Sony WH-1000XM4 amazing', price: 109 },
          { id: 4, img: Product, name: 'jbl WH-1000XM4 Bluetooth', price: 2479 },
          { id: 5, img: Product, name: 'jbl WH-1000XM4 Air pro', price: 2889 },
          { id: 6, img: Product, name: 'jbl WH-1000XM4 amazing', price: 209 }
  ]

  return (
    <section>
      <div className="flex justify-center flex-wrap">
        {products.map(product => (
          <div key={product.id} className="max-w-sm border-2 border-gray-300 rounded p-3 hover:cursor-pointer m-4">
            <img className="rounded-md" src={product.img} alt={product.name} />
            <h1 className="text-2xl my-5">{product.name}</h1>
            <span className="flex justify-between items-center">
              <span className='text-xl'>${product.price}</span>
              <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
