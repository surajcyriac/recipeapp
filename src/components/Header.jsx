



import React from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <nav className='flex bg-gray-900 fixed w-full p-4 z-50 shadow-md'>
      <Link className='text-yellow-500 text-2xl font-bold' to={'/'}>
        <i className="fa-solid fa-bowl-food me-1"></i> E Recipe
      </Link>
      <ul className='flex-1 text-right list-none'>
        <li className='list-none inline-block px-5'>
          <input 
onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}             className='rounded p-2 bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors' 
            style={{ width: '300px' }} 
            type="text" 
            placeholder='Search Products' 
          />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
