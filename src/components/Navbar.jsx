import React from 'react'
import Logo from '../Assets/logo.png'
// import ''
const Navbar = () => {
  return (
   
    <div className='mx-32 flex flex-row items-center justify-between' >
       <div className='flex flex-row gap-10 items-center'>
         <img src={Logo}  className='h-16' alt="" />
         
         <div className='flex flex-row gap-1'>
            <lable className='font-font1 text-l font-bold'>Solutions</lable>
            <select name="Solutions" style={{color:"#0076CE"}}/>
         </div>

         <div className='flex flex-row gap-1'>
            <lable className='font-font1 text-l font-bold'>Features</lable>
            <select name="Featyres" style={{color:"#0076CE"}} />
         </div>
         
         <lable className='font-font1 text-l font-bold'>Blogs</lable>

         <div className='flex flex-row gap-1'>
            <label htmlFor="" className='font-font1 text-l font-bold'>About</label>
            <select name="About" style={{color:"#0076CE"}} />
         </div>
       </div>

       <div className='flex flex-row gap-2'>
            <button className='border-2 border-blue-600 py-2 px-6 rounded-lg font-bold text-blue-600'>Login</button>
            <button className='border-2 border-blue-600 bg-blue-600 py-2 px-6 rounded-lg text-white font-bold ' >Register</button>

       </div>
    </div>

   
  )
}

export default Navbar