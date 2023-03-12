import React from 'react';

const Home = () => {
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex'>
        {/*left section*/}
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold'>The Fastest delivery in <span className='text-red-600'>Your HOME</span></h2>
        </div>
        {/*right section*/}
        <div className='md:w-1/2'>
          <div>image1</div>
          <div>image2</div>
          <div>image3</div>
        </div>
      </div>
    </div>
  )
}

export default Home;