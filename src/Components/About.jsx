import React from 'react';
import { Data } from '../Data/Data';
import {AiFillStar} from 'react-icons/ai';
// w-[290px] h-[370px]


const About = () => {
  return (
    <div className='max-w-[1250px] mx-auto'>
      <h1 className='text-center text-4xl text-black font-redrose font-bold mb-4'>Inspiration for your next adventure</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center'>
     {Data.map((info, index) => (
        <div key={index} className='border p-3 rounded-lg mt-3'>
            <div>
            <img src={info.image} className=' w-full mb-2' alt={info.name} />
            </div>
            <div className='flex justify-between text-[#434343] text-[11px] font-redrose'>
            <div>
                <p className='mb-1'>{info.name}</p>
                <p>{info.distance}</p>
            </div>
            <div className='text-right'>
                <p className='font-bold text-[12px] mb-1'>{info.cost}</p>
                <p>{info.time}</p>
            </div>
            </div>
            <div className='flex flex-inline my-2 text-[#A02279] '>
                < AiFillStar size={12} className='mr-1'/>
                < AiFillStar size={12} className='mr-1' />
                < AiFillStar size={12} className='mr-1' />
                < AiFillStar size={12} className='mr-1' />
                < AiFillStar size={12} className='mr-1'/>
            </div>
            
        </div>
     ))}

      </div>
    </div>
  )
}

export default About
