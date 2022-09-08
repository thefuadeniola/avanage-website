import React from 'react'

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
                        Let us take you through the Avanage process. Ranging from sales and installation of cash automation
                        technology to services rendered and our bigger picture.
                    </p>
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
                                AVANAGE Group is a specialised firm of Payment Systems Consultants and domain experts who are drivers of major initiatives in the African Financial and Payment Services landscape.
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
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}