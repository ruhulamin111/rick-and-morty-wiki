import React from 'react'
import logo from '../assets/Logo.png'
import backgroundImage from '../assets/Background.png'
import bubble from '../assets/bubble.png'
import gun from '../assets/Gun.png'
import portal from '../assets/portal.png'
import spiral from '../assets/Spiral.png'

const TopBanner = () => {
    return (
        <div style={{ background: `url(${backgroundImage})` }}>
            <div className='max-w-7xl md:w-10/12 mx-auto flex flex-col justify-around items-center h-screen' >
                <img className='h-12' src={logo} alt="" />

                <div className='text-7xl 2xl:text-9xl font-bold uppercase leading-normal 2xl:leading-relaxed text-[#14d9E5]'>
                    <h1>The Rick and <br /> <span className='text-[#9DEF29]'>Morty Wiki</span> </h1>
                </div>

                <div className='flex items-center gap-10'>
                    <button className=' text-white rounded-full py-2 px-4 bg-[#9DEF29]'> Watch now</button>
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Cumque in natus <br /> obcaecati corrupti.</p>
                </div>
            </div>

            <img className='absolute top-10 left-10 ' src={bubble} alt="" />
            <img className='absolute top-10 right-10 ' src={gun} alt="" />
            <img className='absolute bottom-10 left-10  ' src={portal} alt="" />
            <img className='absolute bottom-10 right-10' src={spiral} alt="" />
        </div>
    )
}

export default TopBanner