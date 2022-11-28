import React from 'react';
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='max-w-[1150px] mx-auto pt-4 '>
      <div className='flex flex-row justify-between items-center'>
    
        <div>
            <img src={logo} className='w-[180px]'  alt='logo' />
        </div>
        <div className>
            <nav>
                <ul className='flex items-center pt-2 text-gray-[#434343]  mx-2 '>
                    <li><a className='mx-4 px-4 font-redrose font-normal text-[16px]' href='/home'>Home</a></li>
                    <li><a className='mx-4 px-4 font-redrose font-normal' href='/PTS'>Place to stay</a></li>
                    <li><a className='mx-4 px-4 font-redrose font-normal' href='/NFTs'>NFTs</a></li>
                    <li><a className='mx-4 px-4 font-redrose font-normal ' href='/community'>Community</a></li>
                </ul>
            </nav>
        </div>
        <div>
            <button className='bg-[#A02279] text-white px-6 font-redrose font-normal text-sm py-2 rounded-md '>Connect wallet</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
