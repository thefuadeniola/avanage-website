import React from 'react'
import { sst } from '../data'
import { tau } from '../data'
import { cps } from '../data'
import { GoPrimitiveDot } from 'react-icons/go'

export default function Product() {
    const [details, setDetails] = React.useState(null)
    const showDetails = (name) => {
        if (details === null) {
            setDetails(name)
        } else {
            setDetails(null)
        }
    }
    const selfServiceTerminals = sst.map((product) => {
        return (
            <>
                <div key={product.name} onClick={() => showDetails(product.name)} className='shadow-lg hover:shadow-2xl rounded-md flex flex-col product__card'>
                    <div className='p-4'>
                        <img src={product.image} alt='' className='bg-white' />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-redish'>{product.name}</h2>
                        <p className='text-sm'>{product.type} | {product.model}</p>
                    </div>
                </div>
                <div className={`p-4 ${details !== product.name && 'hidden'}`}>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mt-4 mb-4'>{details}</h2>
                        {product.pros.map((pro) => {
                            return (
                                <p className='flex space-x-4'><GoPrimitiveDot /> <span>{pro}</span></p>
                            )
                        })}
                    </div>
                </div>

            </>
        )
    })
    const tellerAssistantUnits = tau.map((product) => {
        return (
            <>
                <div key={product.name} onClick={() => showDetails(product.name)} className='shadow-lg hover:shadow-2xl rounded-md flex flex-col product__card'>
                    <div className='p-4'>
                        <img src={product.image} alt='' className='bg-white' />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-redish'>{product.name}</h2>
                        <p className='text-sm'>{product.type}</p>
                    </div>
                </div>
                <div className={`p-4 ${details !== product.name && 'hidden'}`}>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mt-4 mb-4'>{details}</h2>
                        {product.pros.map((pro) => {
                            return (
                                <p className='flex space-x-4'><GoPrimitiveDot /> <span>{pro}</span></p>
                            )
                        })}
                    </div>
                </div>

            </>

        )
    })
    const cashProcessingSystems = cps.map((product) => {
        return (
            <>
                <div key={product.name} onClick={() => showDetails(product.name)} className='shadow-lg hover:shadow-2xl rounded-md flex flex-col product__card'>
                    <div className='p-4'>
                        <img src={product.image} alt='' className='bg-white' />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-redish'>{product.name}</h2>
                        <p className='text-sm'>{product.type} | {product.model}</p>
                    </div>
                </div>
                <div className={`p-4 ${details !== product.name && 'hidden'}`}>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='mt-4 mb-4'>{details}</h2>
                        {product.pros.map((pro) => {
                            return (
                                <p className='flex space-x-4'><GoPrimitiveDot /> <span>{pro}</span></p>
                            )
                        })}
                    </div>
                </div>

            </>
        )

    })
    return (
        <section className='products p-6'>
            <div className='flex justify-center text-center p-6'>
                <p>Avanage Products Catalogue. To order or make enquiries, <a href='#contact' className='underline text-redish'>contact us below</a></p>
            </div>
            <div className='p-6 container'>
                <div className='flex justify-center text-center'>
                    <h2 className='text-3xl text-redish'>Self Service Terminals</h2>
                </div>
                <div className='p-4 flex flex-wrap'>
                    {selfServiceTerminals}
                </div>
            </div>
            <div className='p-6 container'>
                <div className='flex justify-center text-center'>
                    <h2 className='text-3xl text-redish'>Teller Assistant Units</h2>
                </div>
                <div className='p-4 flex flex-wrap'>
                    {tellerAssistantUnits}
                </div>
            </div>
            <div className='p-6 container'>
                <div className='flex justify-center text-center'>
                    <h2 className='text-3xl text-redish'>Cash Processing Systems</h2>
                </div>
                <div className='p-4 flex flex-wrap space-x-2'>
                    {cashProcessingSystems}
                </div>
            </div>


        </section>
    )
}