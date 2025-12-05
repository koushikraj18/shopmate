
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

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450 wired bluetooth", "price": 49, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
  ]

  return (
    <section>
      <div className="flex justify-center flex-wrap">
        {products.map(product => (
          <div key={product.id} className="max-w-sm border-2 border-gray-300 rounded p-3 hover:cursor-pointer m-4">
            <img className="rounded-md" src={product.image} alt={product.name} />
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
