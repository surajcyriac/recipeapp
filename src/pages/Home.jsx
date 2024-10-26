import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;

  const { allProducts, loading, error } = useSelector(state => state.productReducer);
  const currentaPageLastIndex = currentPage * productPerPage;
  const currentaPageFirstIndex = currentaPageLastIndex - productPerPage;
  const visibleProductCards = allProducts?.slice(currentaPageFirstIndex, currentaPageLastIndex);

  const totalPage = Math.ceil(allProducts?.length / productPerPage);
  const navigateToNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const navigateToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header insideHome={true} />
      <div 
        style={{
          paddingTop: '100px',
          backgroundColor: '#121212', // Dark background for the container
          minHeight: '100vh'
        }}
        className='container px-4 mx-auto text-gray-300'
      >
        {
          loading ? (
            <div className='flex justify-center items-center my-5 text-lg'>
              <img 
                width={'70px'} 
                height={'70px'} 
                className='me-2' 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW1vMXoyenZ0MXJjNWFycWg3eXJuem53eGtqd2t2YWJicnJjeHFtYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.webp" 
                alt="" 
              /> 
              Loading...
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                  allProducts?.length > 0 ? visibleProductCards.map(product => (
                    <div 
                      key={product?.id} 
                      className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                      <img 
                        className='rounded-t-lg object-cover' 
                        width={'100%'} 
                        height={'200px'} 
                        src={product?.image} 
                        alt={product?.name} 
                      />
                      <div className='text-center mt-3'>
                        <h3 className='text-2xl font-bold text-white'>{product?.name}</h3>
                        <p className='text-red-400 font-semibold'>{product?.cuisine}</p>
                        <Link 
                          className='bg-yellow-500 rounded px-3 py-1 mt-3 text-gray-900 inline-block hover:bg-yellow-600 hover:text-white transition-colors' 
                          to={`${product?.id}/view`}
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  )) : (
                    <div className='flex justify-center items-center my-5 text-lg'>
                      No products found
                    </div>
                  )
                }
              </div>
              <div className="text-center font-bold text-2xl text-gray-300 mt-8">
                <span 
                  className='cursor-pointer hover:text-yellow-500 transition-colors' 
                  onClick={navigateToPrevPage}
                >
                  <i className="fa-solid fa-backward me-5"></i>
                </span>
                <span>{currentPage} of {totalPage}</span>
                <span 
                  className='cursor-pointer hover:text-yellow-500 transition-colors' 
                  onClick={navigateToNextPage}
                >
                  <i className="fa-solid fa-forward ms-5"></i>
                </span>
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

export default Home;
