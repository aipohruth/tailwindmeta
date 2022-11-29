import React from 'react'

const Modal = ({setShowModal}) => {
  return (
    
    <div className='fixed inset-0  backdrop-blur-sm z-10  flex justify-center items-center '>
     <div className='bg-white w-[300px] mx-auto  shadow-md p-6 relative flex justify-center '>
        <div>
     Modal
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus consequatur atque suscipit 
      accusantium quae, cum at dicta delectus ad minima a. Architecto recusandae sunt nam hic
       facilis quas at quasi.
       </div>
     <div className='absolute top-1 right-3 mb-2'>
        <button onClick={() => setShowModal(false)}>DEL</button>
     </div>
    </div>
    </div>
  )
}

export default Modal
