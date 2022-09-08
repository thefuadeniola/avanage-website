import React from 'react'
import { Link } from 'react-router-dom'
import { GoPrimitiveDot } from 'react-icons/go'

export default function Items() {
    return (
        <section className='p-6 features'>
            <div className='flex flex-col space-y-8 md:space-y-0 md:flex-row p-6 justify-around'>
                <div className='flex flex-col space-y-8 md:w-1/2'>
                    <h3 className='text-4xl text-center md:text-left slide-left font-bold'>
                        Check Out the Full Range of our <span className='text-redish'>Cash Automation Products</span> including...
                    </h3>
                    <div className='hidden md:flex text-center'>
                        <Link
                            to='/management'
                            className="p-3 px-6 pt-2 text-white bg-redish rounded-full baseline hover:bg-pastel"
                        >All Products</Link>

                    </div>
                </div>
                <div className='md:w-1/2 flex flex-col space-y-8'>
                    <div className='flex flex-row space-x-4 items-center'>
                        <GoPrimitiveDot className='text-redish' />
                        <p className='text-xl'>Self Service Terminals</p>
                    </div>
                    <div className='flex flex-row space-x-4 items-center'>
                        <GoPrimitiveDot className='text-redish' />
                        <p className='text-xl'>Teller Assistant Units</p>
                    </div>
                    <div className='flex flex-row space-x-4 items-center'>
                        <GoPrimitiveDot className='text-redish' />
                        <p className='text-xl'>Cash Processing Solutions</p>
                    </div>
                    <div className='flex flex-row space-x-4 items-center'>
                        <GoPrimitiveDot className='text-redish' />
                        <p className='text-xl'>Payment Software Solutions</p>
                    </div>
                    <div className='flex flex-row space-x-4 items-center'>
                        <GoPrimitiveDot className='text-redish' />
                        <p className='text-xl'>Hybrid Solar Inverter Power Solutions</p>
                    </div>

                </div>
            </div>
        </section>
    )
}