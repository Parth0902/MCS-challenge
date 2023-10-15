import React from 'react'
import Navbar from './Navbar'
import img1 from '../Assets/hero_grid_1.png'
import img2 from '../Assets/hero_grid_2.png'
import img3 from '../Assets/hero_grid_3.png'
const Hero = () => {
  return (
   
    <div className=' h-screen' style={{background: "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",backgroundPosition:'center'}}>
         <Navbar/>

         <div className='mx-32 flex flex-row justify-center h-full gap-10 w-3/4'>
             <div className='flex items-center'>
              <div className='flex flex-col gap-10'>
              <h1 className='text-7xl font-font1 font-bold '> Find <span style={{background: "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",backgroundClip: "text",webkitBackgroundClip: "text",WebkitTextFillColor: "transparent"}}>Partners</span> (CAs) available online</h1>
              <h4 className='font-font1 text-xl font-normal pr-40'><span style={{color:'##616161'}}>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</h4>
                <div className='flex flex-row gap-0'>
                    <input className='w-96 px-4 py-4 border border-gray-400 rounded' type="text" placeholder='Search by name' />
                    <button className='px-4 py-4 rounded text-white w-44' style={{backgroundColor:'#0076CE'}}>Search</button>
                </div>
             </div>
          </div>

          <div className='flex items-center'>
            <div className='flex flex-row gap-10 items-center'>
              <img className="" src={img1} alt="grid images" />
              <img className="relative bottom-20" src={img2} alt="grid images" />
              <img className="relative bottom-10" src={img3} alt="grid images" />
            </div>
          </div>

         </div>
    </div>
  )
}

export default Hero