import React from 'react'
import FooterCard from './FooterCard'
import FooterIcon1 from '../Assets/FooterIcon1.png'
import FooterIcon2 from '../Assets/FooterIcon2.png'
import FooterIcon3 from '../Assets/FooterIcon3.png'
import Logo from '../Assets/Logo.png'
import Location from '../Assets/Location.png'
import Image from 'next/image'

function Footer() {
    return (
        <div style={{ backgroundColor: ' #17414F' }} className='w-[80%] mx-auto  '>
            <div className='flex justify-around items-center flex-wrap gap-4'>
                <FooterCard FooterIcon={FooterIcon1} Info1='Phone Number' Info2='+974 3118 1843' />
                <FooterCard FooterIcon={FooterIcon2} Info1='Email Address' Info2='Elbrithcqhr@gmail.com' />
                <FooterCard FooterIcon={FooterIcon3} Info1='Office Location' Info2=' Ambassador Street, Zone 61,' />
            </div>
            <div className='flex justify-around items-center flex-wrap gap-4 mt-10 text-white'>
                <Image src={Logo} alt='Logo' className=' w-72 object-contain' />
                <div className='h-16 w-72 text-xs'>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.</div>
                <div className='h-16 w-72'></div>
            </div>
            <div className='flex gap-2 text-white text-xs ml-2 md:ml-12 mt-10'>
                <Image src={Location} alt='Logo' className=' w-2 object-contain' />
                <div>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</div>
            </div>
        </div>
    )
}

export default Footer
