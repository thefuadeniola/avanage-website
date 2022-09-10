import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

export default function Features() {
    return (
        <section className="features">
            <div
                class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
            >
                <div class="flex flex-col space-y-12 md:w-1/2">
                    <h2 class="max-w-md text-4xl font-bold text-center md:text-left text-redish">
                        What do we do at Avanage?
                    </h2>
                    <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                        Our principal activities range from <span className='text-redish'>electronic banking</span>,
                        <span className='text-redish'>payment systems</span>, consulting, to sales and services of the latest <span className='text-redish'>cash automation technology</span>
                        in Africa.
                    </p>
                    <div className='big p-8 shadow-lg hover:shadow-xl max-w-sm rounded-lg'>
                        <span className='text-redish big text-center'>40+</span>
                        <p className='text-2xl'>Seasoned Engineers</p>
                    </div>

                </div>

                <div class="flex flex-col space-y-8 md:w-1/2">
                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >
                        <div class="rounded-l-full bg-redish md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div
                                    class="px-4 py-2 text-white rounded-full md:py-1 bg-redish"
                                >
                                    01
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
                                    Who we are
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Who we are
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Incorporated in 2011, AVANAGE Group is a specialised firm of Payment Systems Consultants and domain experts who are drivers of major initiatives in the African Financial and Payment Services landscape.
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >
                        <div class="rounded-l-full bg-redish md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div
                                    class="px-4 py-2 text-white rounded-full md:py-1 bg-redish"
                                >
                                    02
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
                                    Our Expertise
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Our Expertise
                            </h3>
                            <p class="text-darkGrayishBlue">
                                Deployment, Outsourcing and Management of Large Scale ATM Networks across Africa. We are the Single Point-of-Contact for ATM and Cash Management Solutions offered on a Sales, Service or Outsourced (Operating Lease) Basis.
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                    >
                        <div class="rounded-l-full bg-redish md:bg-transparent">
                            <div class="flex items-center space-x-2">
                                <div
                                    class="px-4 py-2 text-white rounded-full md:py-1 bg-redish"
                                >
                                    03
                                </div>
                                <h3 class="text-base font-bold md:mb-4 md:hidden">
                                    Mission & Vision
                                </h3>
                            </div>
                        </div>

                        <div>
                            <h3 class="hidden mb-4 text-lg font-bold md:block">
                                Mission & Vision
                            </h3>
                            <p class="text-darkGrayishBlue">
                                To be the Leading Payment Services Company in Africa fully committed to local capacity development and to continuously advance the boundaries of innovation and service excellence.
                                Avanage strives to provide the best customer service across Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-6 flex justify-center'>
                <div className='md:px-4 flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center'>
                    <div className='big p-8 shadow-lg hover:shadow-xl rounded-lg'>
                        <span className='text-redish big text-center'>100+</span>
                        <p className='text-xl text-center'>Customer Services Centers<br /> across Africa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}