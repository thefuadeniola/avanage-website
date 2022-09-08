import React from 'react'
import Home from './components/home'
import HomePage from './components/homepage'
import Products from './components/Products'
import Management from './components/Management'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {

    return (
        <Router>
            <div className='app relative'>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route index element={<HomePage />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/management' element={<Management />} />
                    </Route>
                </Routes>
            </div>
        </Router>

    )
}

