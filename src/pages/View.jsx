import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const View = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('allProducts')) {
      const allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
      setProduct(allProducts?.find(item => item.id == id));
    }
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='flex justify-center items-center mx-5'>
        <div className="grid grid-cols-2 items-center gap-10 bg-gray-900 p-6 rounded shadow-lg text-gray-300">
          <img 
            width={'100%'} 
            height={'250px'} 
            src={product?.image} 
            alt={product?.name} 
            className='rounded-lg shadow-md' 
          />
          <div className='ms-3'>
            <h1 className="text-4xl font-bold text-yellow-500 pb-4">{product?.name}</h1>
            <h4 className="font-bold text-red-500 text-2xl">{product?.cuisine}</h4>
            <h4 className="font-bold text-yellow-400 text-xl">Meal Type: {product?.mealType}</h4>
            <p className='my-4'>
              <span className='font-bold'>Ingredients:</span> {product?.ingredients}
            </p>
            <h3 className='font-bold my-5 text-lg'>Review Count: {product?.reviewCount}</h3>
          <div className='flex'>
              <h5 className='text-yellow-400'><i className="fa-solid fa-star  text-yellow-500"></i></h5>
              <h5 className='text-yellow-400'><i className="fa-solid fa-star  text-yellow-500"></i></h5>
              <h5 className='text-yellow-400'><i className="fa-solid fa-star  text-yellow-500"></i></h5>
              <h5 className='text-yellow-400'><i className="fa-solid fa-star  text-yellow-500"></i></h5>
              <h5 className='text-yellow-400'><i className="fa-solid fa-star  text-yellow-500"></i></h5>
          </div>
            {/* <div className='space-y-4'>
              {
                product?.reviews?.map(item => (
                  <div key={item?.date} className='bg-gray-800 border border-gray-700 rounded p-3'>
                    <h5>
                      <span className='font-bold text-yellow-500'>{item?.reviewCount}:</span> {item?.comment}
                      </h5>
                    
                  </div>
                ))
              }
            </div> */}

            {/* Buttons for Wishlist and Cart - Uncomment and customize these as needed */}
            {/* <div className='flex justify-between mt-5'>
              <button onClick={() => handleWishlist(product)} className='text-white bg-blue-600 hover:bg-blue-700 rounded p-2'>
                ADD TO WISHLIST
              </button>
              <button onClick={() => handleCart(product)} className='text-white bg-green-600 hover:bg-green-700 rounded p-2'>
                ADD TO CART
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
