import React from 'react'
import Hero from './hero'
import Items from './Items'
import Features from './features'
import Products from './Swiper'
import { Link } from 'react-router-dom'
import emmanuel from '../assets/emmanuel-okey-okoro.png'
import bajomo from '../assets/olumide-bajomo.png'
import adebola from '../assets/mrAyo.png'

export default function HomePage() {
    return (
        <section className='body'>
            <Hero />
            <Items />
            <Features />
            <Products />
            <section id="testimonials" className='pb-5'>
                <div className="max-w-6xl px-5 mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center pt-4">
                        Meet The Management
                    </h2>
                    <div className="flex flex-col mt-24 md:flex-row md:space-x-6 space-y-12 md:space-y-0">
                        <div
                            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-lg md:w-1/3"
                        >
                            <img src={bajomo} className="w-16 h-16 cover -mt-14 rounded-full bg-white" alt="" />
                            <h5 className="text-xl uppercase text-redish font-bold">Olumide Bajomo</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                Olumide has over 23 years experience spanning technology, payment and financial service industries working with leading national and international organizations...
                            </p>
                        </div>

                        <div
                            className="flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-lg md:flex md:w-1/3"
                        >
                            <img src={adebola} className="w-16 h-16 cover rounded-full -mt-14" alt="" />
                            <h5 className="text-xl font-bold uppercase text-redish">Ayorinde Adebola</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                Ayo is a Technology, E-Banking, E-Payments and E-Business Specialist with a track record of achievements spanning over 15 years of building and transformation...
                            </p>
                        </div>

                        <div
                            className="flex-col items-center p-6 space-y-6 rounded-lg bg-white shadow-lg md:flex md:w-1/3"
                        >
                            <img src={emmanuel} className="w-16 h-16 cover rounded-full -mt-14" alt="" />
                            <h5 className="text-xl font-bold uppercase text-redish">Emmanuel Okey Okoro</h5>
                            <p className="text-sm text-darkGrayishBlue">
                                Emmanuel Okey Okoro is a former managing director of a full-service country subsidiary bank. An astute financial manager, business strategist and technology innovation specialist...
                            </p>
                        </div>
                    </div>
                    <div className="my-16">
                        <Link
                            to='/management'
                            className="p-3 px-6 pt-2 text-white bg-redish rounded-full baseline hover:bg-pastel"
                        >See All</Link>
                    </div>
                </div>
            </section>

        </section>
    )
}