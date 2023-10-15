import React from 'react';
import foot_logo from '../Assets/white_logo.png';
import facebook from '../Assets/facebook.png'
import insta from '../Assets/instagram.png'
import linkdin from '../Assets/linkedin.png'
import whatsApp from '../Assets/whatsapp.png'


const Footer = () => {

  const Footer_data = [
    {
      header: 'COMPANY',
      sections: ['About', 'Pricing', 'Careers'],
    },
    {
      header: 'SOLUTIONS',
      sections: ['Search', 'Connect', 'Research', 'Academy'],
    },
    {
      header: 'RESOURCES',
      sections: ['Blogs', 'Forms'],
    },
    {
      header: 'SUPPORT',
      sections: ['Help', 'Contact Us'],
    },
    {
      header: 'LEGAL',
      sections: ['Privacy', 'Terms', 'Accessibility'],
    },
  ];

  return (
    <div>
      <div style={{ background: 'var(--gradient-footer, linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%))' }}  className='flex flex-col gap-2'>
        <div className='flex flex-row justify-between mx-32 pt-10'>
          <div flex flex-col gap-2>
            <img src={foot_logo} className='h-16' alt='footer logo' />
            <p className='text-white font-normal text-sm leading-6'>India's first platform dedicated to simplifying partner search</p>
          </div>

          {Footer_data.map((sec) => (
            <div className='flex flex-col pt-4' key={sec.header}>
              <h4 className='font-font1 text-white font-normal text-lg pb-2'>{sec.header}</h4>
              {sec.sections.map((data) => (
                <p className='font-font1 text-white font-light pb-2 leading-6' key={data}>
                  {data}
                </p>
              ))}
            </div>
          ))}
        </div>
        
        <hr className=' mx-32'/>

        <div className='mx-32 flex flex-row justify-between py-14'>
            <p className='text-white '>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className='flex flex-row gap-6 '>
              <img className='h-5' style={{color:'white'}} src={facebook} alt="facebook logo" />
              <img className='h-5' style={{color:'white'}} src={insta} alt="instagram kogo" />
              <img className='h-5' style={{color:'white'}} src={linkdin} alt="linkdin logo" />
              <img className='h-5' style={{color:'white'}} src={whatsApp} alt="whats app logo" />
            </div>
           
        </div>
        
      </div>

      <div className='flex flex-row justify-center py-3 bg-black'>
        <p className='text-white font-normal text-sm leading-6'>
          Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
        </p>

        
        <div>
           
        </div>
      </div>
    </div>
  );
};

export default Footer;
