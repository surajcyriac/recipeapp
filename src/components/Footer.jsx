import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ height: '300px', marginBottom: '30px' }} className='bg-gray-900 flex flex-col mt-5 text-gray-300'>
      <div className='flex justify-between w-full p-5'> 
        <div style={{ width: '400px' }}>
          <Link className='text-yellow-500 text-2xl font-bold' to={'/'}> 
            <i className="fa-solid fa-bowl-food"></i> Recipes
          </Link>
          <p className='mt-3'>
            Designed and built with all the love in the world by the June 2024 Batch student with the help of our contributors.
          </p>
          <p>Code licensed Tony, docs CC BY 3.0</p>
          <p>Currently v1.0.0</p>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-xl font-bold mb-2 text-yellow-500'>Links</h1>
          <Link className='hover:text-yellow-500' to={'/'}>Home</Link>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-xl font-bold mb-2 text-yellow-500'>Guides</h1>
          <Link className='hover:text-yellow-500' to={'https://react.dev/'}>React</Link>
          <Link className='hover:text-yellow-500' to={'https://react-bootstrap.github.io/'}>React Bootstrap</Link>
          <Link className='hover:text-yellow-500' to={'https://reactrouter.com/en/main'}>React Router</Link>
        </div>

        <div className="flex flex-col">
          <h5 className='text-xl font-bold mb-2 text-yellow-500'>Contact Us</h5>
          <div className='flex'>
            <input 
              placeholder='Enter your email here' 
              type="text" 
              className='text-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500'
              style={{ width: '200px' }} 
            />
            <button className='rounded bg-yellow-500 hover:bg-yellow-600 p-2 ms-3'>
              <i className='fa-solid fa-arrow-right text-white'></i>
            </button>
          </div>
          <div className='flex justify-between mt-3 space-x-3'>
            <a href="#" className='text-gray-300 hover:text-yellow-500'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href="#" className='text-gray-300 hover:text-yellow-500'>
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a href="#" className='text-gray-300 hover:text-yellow-500'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href="#" className='text-gray-300 hover:text-yellow-500'>
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href="#" className='text-gray-300 hover:text-yellow-500'>
              <i className='fa-brands fa-github'></i>
            </a>
            <a href="#" className='text-gray-300 hover:text-yellow-500'>
              <i className='fa-solid fa-phone'></i>
            </a>
          </div>
        </div>
      </div>

      <p className='text-center text-gray-500 mt-5'>
        Copyright &copy; 2024 E Cart June24 Batch Student. Built with React.
      </p>
    </div>
  )
}

export default Footer;
