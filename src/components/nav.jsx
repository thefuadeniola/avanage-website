import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../components/context'

export default function Nav() {
    const { isMenu, setIsMenu, handleClick } = useStateContext();

    const [isDark, setIsDark] = React.useState(false)
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsDark(true)
            } else setIsDark(false)
        });
        return () => {
            window.removeEventListener('scroll', setIsDark)
        }
    }, [])

    return (
        <section>
            <nav className={`fixed top-0 left-0 right-0 py-4 flex justify-between items-center px-8 ${isDark && 'bg-white shadow-md'} z-10`}>
                <div className="pl-6">
                    <Link to='/'>
                        <img src={logo} alt="" className='logo' />
                    </Link>
                </div>
                <button id="menu-btn" onClick={handleClick} className={`block hamburger md:hidden ${isMenu && 'open'} focus:outline-none`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
                <div className={`hidden md:flex space-x-8 pr-6 text-redish text-bold items-center`}>
                    <NavLink to='/products' className='nav-link relative'>Products</NavLink>
                    <NavLink to='/management' className='nav-link relative'>Management</NavLink>
                    <a className='nav-link relative' href='#contact'>Contact Us</a>
                    <a href='https://app.rackspace.com' className='p-3 px-6 pt-2 text-white bg-redish rounded-full baseline hover:bg-pastel hidden lg:block'>Staff Login</a>
                </div>
            </nav>
            <div className="md:hidden z-100">
                <div id="menu"
                    className={`z-100 absolute flex flex-col items-center self-end py-8 mt-20 space-y-6 font-bold bg-white sm-w-auto sm:self-center left-6 right-6 drop-shadow-md ${!isMenu && 'hidden'}`}>
                    <Link to='/' onClick={handleClick}>Home</Link>
                    <Link to='/products' className='nav-link relative' onClick={handleClick}>Products and Services</Link>
                    <Link to='/management' className='nav-link relative' onClick={handleClick}>Management</Link>
                    <a className='nav-link relative' href='#contact' onClick={handleClick}>Contact Us</a>
                    <a href='https://app.rackspace.com'>Staff Login</a>
                </div>
            </div>

        </section>
    )
}