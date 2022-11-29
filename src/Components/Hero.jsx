import React from 'react';
import hero from '../Assets/htop.png';

const Hero = () => {
  return (
    <div className='max-w-[1250px] mx-2 sm:mx-auto md:mx-auto pt-4 '>

      <div className='flex flex-col sm:flex-row justify-between items-center pt-[40px]'>
        <div className='w-full sm:max-w-[500px]' >
            <div>
                <h1 className='text-[40px] text-[#434343] font-medium '>Rent a 
                 <span className='text-[#A02279] font-medium'> Place</span> away from <br/>
                 <span className='text-[#A02279] font-medium'> Home</span> in the 
                 <span className='text-[#A02279] font-medium'> Metaverse</span></h1>
                <p className='text-[#434343] font-normal w-[400px] text-[16px] my-6'>we provide you access to luxury and affordable houses in the metaverse, 
                get a chance to turn your <br />imagination to reality at your comfort zone</p>

                <div className=' w-[350px] sm:w-[450px] py-4 '>
            <input type='text' placeholder='Search for location' className=' border border-gray-400 focus:outline-none w-[250px] sm:w-[280px] rounded-l-md  p-1.5'/>
                <button className='bg-[#A02279] w-[100px] sm:w-[170px] p-2  rounded-r-md text-white'>Search</button>
                </div>
            </div>
        </div>


        <div className='max-w-[500px] -ml-16'>
            <img className='w-[400px] ' src={hero} alt='3Boxes' />
        </div>
      </div>

    </div>
  )
}

export default Hero
