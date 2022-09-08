import React from 'react'
import herobg from '../assets/herobg.jpg'
import grg from '../assets/grg.png'
import { useStateContext } from '../components/context'

export default function Hero() {
    const { isMenu } = useStateContext();
    return (
        <div className='h-screen flex flex-col space-y-8 justify-center items-center' style={{
            backgroundImage: `linear-gradient(rgba(255,250,250, 0.3), rgba(255,250,250, 0.3)),
            url(${herobg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        }}>
            {!isMenu && <h1 className='header-text avanage slide-left text-redish tracking-wide'>AVANAGE GROUP</h1>}
            {!isMenu && <img src={grg} alt='' className='slide-right h-16 w-auto' />}
            {!isMenu &&
                <div className='p-3 flex flex-col md:flex-row'>
                    <div className='px-3 border-1 border-r-slate-900 text-white text-xl slide-left'><p><span className='text-redish'>Cash Automation</span> Simplified</p></div>
                    <div className='px-3 text-white text-xl slide-right'>Innnovation for <span className='text-redish'>a Better Life</span></div>
                </div>
            }
        </div>
    )
}