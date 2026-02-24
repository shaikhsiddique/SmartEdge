import React from 'react'

function Navbar() {
  return (
    <div className=' content w-[60%] h-16 bg-black flex items-center justify-between px-16 absolute top-5 left-1/2 -translate-x-1/2 rounded-l-4xl rounded-r-4xl shadow-[#1D79D3] shadow-sm z-[9999999]'>
        <div className="logo">
        <img src="./images/logo3.png" className=' h-16' alt="" />
        </div>
        <div className="links flex items-center gap-4 text-white text-xl">
            <h3 className=' text-[#1D79D3]'>Home</h3>
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Contact</h3>
        </div>
        <div className="Contact border-0  border-[#1D79D3] ">
            <h3 className='text-white px-1 py-2 '>Lets Connect</h3>
        </div>
    </div>
  )
}

export default Navbar