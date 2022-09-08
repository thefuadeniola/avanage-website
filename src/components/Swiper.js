import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'
import banner5 from '../assets/banner5.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Products() {
    return (
        <section className='p-2'>
            <div className='flex items-center justify-center px-4 py-2 container'>
                <div className='w-screen md:w-1/2 products'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><img src={banner1} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={banner2} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={banner3} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={banner4} alt='' /></SwiperSlide>
                        <SwiperSlide><img src={banner5} alt='' /></SwiperSlide>
                        <SwiperSlide><Link to='/products' className="p-3 px-6 pt-2 text-white bg-redish rounded-full baseline hover:bg-pastel">See More</Link></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}