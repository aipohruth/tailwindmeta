import React from 'react'
import token from '../Assets/mbtoken.png';
import mask from '../Assets/metamask.png';
import sea from '../Assets/opensea.png';

const Brands = () => {
  return (
    <div className='my-[60px] bg-[#A02279] w-full h-[50px]'>
        <div className='flex justify-around items-center  py-2'>
        <div>
           <img src={token} alt='mbtoken' className=' w-[100px] sm:w-[150px]' />
        </div>
        <div>
        <img src={mask} alt='metamask' className=' w-[100px] sm:w-[150px]' />
        </div>
        <div>
        <img src={sea} alt='opensea' className=' w-[100px] sm:w-[150px]' />
        </div>
       
        </div>
      
    </div>
  )
}

export default Brands
