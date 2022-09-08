import React from 'react'
import logo from '../assets/logo-white.png'
import { AiFillLinkedin, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { DiRackspace } from 'react-icons/di'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer id='contact'
            className="bg-redish md:px-32 p-16 flex flex-col space-y-12 md:space-y-0 md:flex-row justify-around">
            <div className="">
                <div className="items-center">
                    <img src={logo} alt='' />
                </div>
                <p className="mt-6 text-white">
                    &copy; Avanage Group. 2022.
                </p>
                <div className="flex flex-row space-x-6 mt-4">
                    <a href="app.rackspace.com"><DiRackspace className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href="#"><AiFillLinkedin className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href="#"><AiOutlineTwitter className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                    <a href="#"><AiFillFacebook className='text-gray-400 text-2xl hover:text-slate-800' /></a>

                </div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row space-x-12 space-y-12 md:space-y-0">
                    <div className="flex flex-col space-y-4">
                        <p className='text-center text-xs md:text-sm text-gray-200 address flex space-x-4'><ImLocation className='text-2xl' /> <span>Plot 5, Tony Anegbode Street, Off Sinari Daranijo Street; Off Ligali Ayorinde. Victoria Island. Lagos - Nigeria</span></p>
                        <p className='text-center text-xs md:text-sm text-gray-200 address flex space-x-4'><FaLocationArrow /> <span>663, London Road, Grays Essex. Rm 20 3HD. United Kingdom</span></p>
                    </div>
                    <div className="flex flex-col space-y-4 text-xs">
                        <a href="#about" className="text-white">Contact</a>
                        <a href="#" className="text-white flex space-x-4 items-center hover:text-gray-400"><BsFillTelephoneFill className='text-white' /><span>+234-700-AVANAGE</span></a>
                        <a href="#" className="text-white flex space-x-4 items-center hover:text-gray-400"><BsFillTelephoneFill className='text-white' /><span>+234-700-2826243</span></a>

                        <a href="#" className="text-white flex space-x-4 items-center hover:text-gray-400">
                            <MdEmail className='text-white' /> <span>info@avanagegroup.com</span></a>

                    </div>

                </div>
            </div>
        </footer>
    )
}
