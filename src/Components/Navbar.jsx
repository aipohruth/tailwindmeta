import React, {useState} from 'react';
import logo from '../Assets/logo.png';
import {FaBars} from 'react-icons/fa';
import Modal from './Modal';


const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className=' max-w-[1250px] mx-2 sm:mx-auto md:mx-auto pt-4  '>
      <div className='flex flex-row justify-between items-center'>
    
        <div>
            <img src={logo} className=' w-[140px] sm:w-[180px]'  alt='logo' />
        </div>
        <nav className='hidden sm:flex justify-center items-center '>
        <div>
            
                <ul className=' flex  items-center pt-2 text-gray-[#434343]  mr-16 '>
                    <li><a className='mx-4 px-4 font-redrose font-normal text-[16px]' href='/home'>Home</a></li>
                    <li><a className='mx-4 px-4 font-redrose font-normal' href='/PTS'>Place to stay</a></li>
                    <li><a className='mx-4 px-4 font-redrose font-normal' href='/NFTs'>NFTs</a></li>
                    <li><a className='mx-4 px-4 font-redrose font-normal ' href='/community'>Community</a></li>
                </ul>
            
        </div>
        <div>
            <button onClick={() => setShowModal(!showModal)} className='flex bg-[#A02279] text-white px-4 ml-16 sm:px-6 font-redrose font-normal text-sm py-2 rounded-md '>Connect wallet</button>
            
        </div>
        </nav>
        <div className='block sm:hidden md:hidden'>
        <FaBars size={40} className='text-[#A02279] cursor-pointer'/>
        </div>
        

      </div>
     {showModal && <Modal setShowModal={setShowModal} /> } 
    </div>
  )
}

export default Navbar
