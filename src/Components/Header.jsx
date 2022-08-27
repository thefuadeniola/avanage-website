import React from 'react'

export default function Header({ category, title }) {
    return (
        <div className='mb-10'>
            <p className='text-gray-400'>
                {category}
            </p>
            <p className='tracking-tight text-slate-900 text-3xl font-extrabold'>{title}</p>
        </div>
    )
}