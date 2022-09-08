import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}