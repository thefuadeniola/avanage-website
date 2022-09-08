import React, { useState } from 'react'
import { data } from '../data'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export default function Management() {
    const [accordion, setAccordion] = useState('none')
    const directors = data.map((director) => {
        const handleClick = (name) => {
            if (accordion === 'none') {
                setAccordion(name)
            } else {
                setAccordion('none')
            }
        }
        return (
            <div key={director.name}>
                <button className="accordion flex justify-between" onClick={() => handleClick(director.name)}>
                    <span>{director.fullName}</span><span className='text-lead-400'><BsFillArrowDownCircleFill /></span>
                </button>
                <div className={`panel ${accordion !== director.name && 'hidden'} p-4`}>
                    <h2 className='mt-4 mb-4'>{director.position}</h2>
                    <p className='text-sm'>{director.bio}</p>
                </div>
            </div>
        )
    })
    return (
        <section className='management px-6 pb-6'>
            <div className='flex justify-center text-center p-4'><h2 className='text-2xl'>Board of Directors</h2></div>
            {directors}
        </section>
    )
}