import React, { useEffect } from 'react'
import './App.css'
import analytics from './assets/analytics.png'
import food from './assets/food.png'
import fuad from './assets/fuad.png'
import netflix from './assets/netflix.png'
import news from './assets/news-app.png'
import quiz from './assets/quiz.png'
import shopping from './assets/shopping.png'
import social from './assets/social.png'
import resume from './assets/fuad-resume.docx'
import maveair from './assets/maveair.png'
import background from './images/background.jpg'
import logo from './images/icons8-code-64.png'
import imagebg from './images/14092.jpg'
import { BiMedal } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineGitlab } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { MdEventAvailable } from 'react-icons/md'

export default function App() {
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

    const [isMenu, setIsMenu] = React.useState(false)
    const handleClick = () => {
        setIsMenu(oldMenu => !oldMenu)
    }

    return (
        <body>
            <div className="md:hidden"
                style={{ backgroundImage: `linear-gradient(rgba(6,182,212,0.5), rgba(6,182,212,0.5)), url(${background})`, backgroundSize: 'cover' }}>
                <nav className={`flex justify-between px-8 py-6 mb-4 text-white shadow-sm fixed top-0 left-0 right-0 ${isDark && 'bg-white text-violet-600'}`} id="nav2">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="" className="h-8" />
                        <p className="text-2xl font-bold text-violet-600">fuadCodes</p>
                    </div>
                    <button id="menu-btn" onClick={handleClick} className={`block hamburger md:hidden ${isMenu && 'open'} focus:outline-none`}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </nav>
                <div className="md:hidden">
                    <div id="menu"
                        className={`absolute flex flex-col items-center self-end py-8 mt-20 space-y-6 font-bold bg-white sm-w-auto sm:self-center left-6 right-6 drop-shadow-md ${!isMenu && 'hidden'}`}>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Experience</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div className="pt-20 pb-8 flex justify-center items-center">
                    <div id="home" className="bg-white shadow-2xl w-5/6 md:w-3/4 rounded-xl p-4 flex flex-col md:flex-row">
                        <div className="rounded-lg md:w-2/5"
                            style={{ backgroundImage: `url(${imagebg})`, backgroundSize: 'cover' }}>
                            <img src={fuad} className="personal-image rounded-lg" />
                        </div>
                        <div className="py-6 text-left flex-col space-y-6 px-8">
                            <div className="">
                                <span className="font-light text-gray-400 text-sm">Nice to meet you, I'm</span>
                                <h2 className="name text-4xl uppercase text-gray-700 font-bold mb-4 tracking-wide">Olaleye Fuad
                                </h2>
                                <span className=" text-violet-800 mt-4 uppercase font-semibold">Frontend Web Developer</span>
                            </div>
                            <div className="flex flex-col space-y-4 px-4 text-sm">
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><BsTelephoneFill className='text-gray-400' /><span>+234
                                    704 7293 841</span></a>
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><GoLocation className='text-gray-400' /><span>Lagos, Nigeria</span></a>
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><MdEventAvailable className='text-gray-400' /><span>Available</span></a>
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><AiOutlineMail className='text-gray-400' /><span>leyefuad@gmail.com</span></a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="main-wrapper hidden md:block">
                <div style={{ backgroundImage: `linear-gradient(rgba(6,182,212,0.5), rgba(6,182,212,0.5)), url(${background})`, backgroundSize: 'cover' }}
                    className="contain w-full bg-repeat-x relative items-center justify-center bg-gradient-to-bl from-cyan-500 to-blue-500">
                    <nav className={`flex justify-between px-8 py-6 mb-4 text-white fixed top-0 right-0 left-0 z-10 shadow-sm ${isDark && 'bg-white text-violet-600'}`}
                        id="nav">
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="" className="h-8" />
                            <p className="text-2xl font-bold">fuadCodes</p>
                        </div>
                        <div className="md:flex space-x-8 pr-6 items-center hidden">
                            <div className="relative"><a href="#home" className="nav-link">Home</a></div>
                            <div className="relative"><a href="#about" className="nav-link">About</a></div>
                            <div className="relative"><a href="#skills" className="nav-link">Experience</a></div>
                            <div className="relative"><a href="#portfolio" className="nav-link">Portfolio</a></div>
                        </div>
                    </nav>
                    <div id="home"
                        className="absolute top-1/4 bg-white shadow-2xl w-5/6 md:w-3/4 rounded-xl card p-4 flex flex-col md:flex-row">
                        <div className="rounded-lg md:w-2/5"
                            style={{ backgroundImage: `url(${imagebg})`, backgroundSize: 'cover' }}>
                            <img src={fuad} className="personal-image rounded-lg" />
                        </div>
                        <div className="py-6 text-left flex-col space-y-6 px-8">
                            <div className="">
                                <span className="font-light text-gray-400 text-sm">Nice to meet you, I'm</span>
                                <h2 className="name text-4xl uppercase text-gray-700 font-bold mb-4 tracking-wide">Olaleye Fuad
                                </h2>
                                <span className=" text-violet-800 mt-4 uppercase font-semibold">Frontend Web Developer</span>
                            </div>
                            <div className="">
                                <p className="max-w-sm font-light text-gray-500 text-sm">I'm an entry level web developer on the
                                    search
                                    for
                                    Frontend roles. I
                                    build
                                    interactive
                                    web applications with consideration for interesting UI and striking aesthetics.
                                    Scroll down and you may be intrigued
                                </p>
                            </div>
                            <div className="flex flex-col space-y-4 px-4 text-sm">
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><BsTelephoneFill className='text-gray-400' /><span>+234
                                    704 7293 841</span></a>
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><GoLocation className='text-gray-400' /><span>Lagos, Nigeria</span></a>
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><MdEventAvailable className='text-gray-400' /><span>Available</span></a>
                                <a href="#" className="text-gray-600 flex space-x-4 items-center"><AiOutlineMail className='text-gray-400' /><span>leyefuad@gmail.com</span></a>

                            </div>
                        </div>
                        <div className="xl:flex xl:flex-col hidden space-y-6 mb-2 pt-12 pl-12 after">
                            <a href="github.com/theylovefuad"><AiFillGithub className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                            <a href="instagram.com/theylovefuad"><AiOutlineInstagram className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                            <a href=""><AiOutlineTwitter className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                            <a href=""><AiOutlineGitlab className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                        </div>
                    </div>
                </div>

            </div>
            <section className="text-center justify-center items-center about flex h-1/2" id="about">
                <div className="px-6 pb-6">
                    <h2 className="text-center text-3xl text-violet-600 font-semibold mb-4 tracking-wider">ABOUT ME</h2>
                    <article className="text-center paragraph">
                        <p className="paragraph leading-8">
                            I am a 17 year old entry level web developer with a fantastic
                            understanding
                            of
                            front end web
                            development.
                            I build web applications using web basics of HTML, CSS and JavaScript or more with more advanced
                            frameworks
                            like
                            React, Next JS and Django. My current primary aim is to find internships / entry-level roles.
                            Electrical Engineering Student of University of Lagos, Lagos, Nigeria.
                        </p>
                        <div className="mt-10">
                            <a href={resume} download className="btn1">Download CV</a>
                            <a href="mailto:legitfuad@gmail.com? subject=HELLO FUAD" className="btn2">Contact Me</a>

                        </div>
                    </article>

                </div>
            </section>
            <section className="flex items-center justify-center mt-8 p-4 md:p-6 h-1/2" id="skills">
                <div className=" md:w-3/4 h-full flex flex-col lg:flex-row shadow-xl justify-center">
                    <div className="bg-violet-600 text-white  lg:w-1/2  p-4">
                        <h2 className="text-xl text-bold text-center mb-4">FRONTEND DEVELOPMENT</h2>
                        <div className="flex flex-row flex-wrap space-x-8 items-center justify-center text-left text-white p-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">HTML</span>
                                </a>
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">CSS</span>
                                </a>
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">JavaScript</span>
                                </a>
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">Bootstrap</span>
                                </a>

                            </div>
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">JQUERY</span>
                                </a>
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">React JS</span>
                                </a>
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">Tailwind CSS</span>
                                </a>
                                <a href="#" className="text-white text-bold text-lg flex space-x-4 items-center">
                                    <BiMedal className='text-2xl text-white text-left' /><span
                                        className="text-bold text-lg">Next JS</span>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-4">
                        <h2 className="text-xl text-bold text-center">BACKEND DEVELOPMENT</h2>
                        <div className="flex flex-row flex-wrap space-x-8 text-left p-6 items-center justify-center">
                            <a href="#" className=" text-bold text-lg flex space-x-4 items-center">
                                <BiMedal className='text-2xl text-left' /><span
                                    className="text-bold text-lg">Django</span>
                            </a>
                            <a href="#" className=" text-bold text-lg flex space-x-4 items-center">
                                <BiMedal className='text-2xl text-left' /><span
                                    className="text-bold text-lg">Python</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="md:p-16 mt-8 p-6">
                <h2 className="text-center text-3xl text-violet-600 font-semibold p-6 tracking-wider">RECENT WORK</h2>

                <div className='container portfolio__container text-white'>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={netflix} alt="" />
                        </div>
                        <h3>Netflix Clone</h3>
                        <a href="https://fuad-netflix.netlify.app" rel="noreferrer" className="btn" target='__blank'>Visit
                            Website</a>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={analytics} alt="" />
                        </div>
                        <h3>Analytics App with React</h3>
                        <a href="https://mave-analytics.netlify.app" rel="noreferrer" className="btn" target='__blank'>Visit
                            Website</a>
                    </article>

                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={news} alt="" />
                        </div>
                        <h3>Real Time News App with React JS</h3>
                        <a href="#" className="btn" target='__blank'>Not in Production</a>
                    </article>

                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={shopping} alt="" />
                        </div>
                        <h3>Online Shopping Site with Django</h3>
                        <a href="https://maveng.pythonanywhere.com" rel="noreferrer" className="btn" target='__blank'>Visit
                            Website</a>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={maveair} alt="" />
                        </div>
                        <h3>Landing Page with Tailwind CSS</h3>
                        <a href="https://maveair.netlify.app" rel="noreferrer" className="btn" target='__blank'>Visit
                            Website</a>
                    </article>

                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={quiz} alt="" />
                        </div>
                        <h3>Quiz App with React JS</h3>
                        <a href="https://mavequiz.netlify.app" rel="noreferrer" className="btn" target='__blank'>Visit
                            Website</a>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={food} alt="" />
                        </div>
                        <h3>Food Ordering Website</h3>
                        <a href="https://themaverickfuad.pythonanywhere.com" rel="noreferrer" className="btn"
                            target='__blank'>Visit
                            Website</a>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={social} alt="" />
                        </div>
                        <h3>Social Media App with Django</h3>
                        <a href="#" rel="noreferrer" className="btn" target='__blank'>Visit Website</a>
                    </article>

                </div>
            </section>
            <footer
                className="bg-violet-600 md:px-32 p-16 flex flex-col space-y-12 md:space-y-0 md:flex-row mt-16 justify-around">
                <div className="">
                    <div className="nav-logo flex items-center">
                        <img src={logo} className="w-8 h-8" />
                        <h2 className="text-white text-4xl mx-2 font-bold text-center">fuadCodes</h2>
                    </div>
                    <p className="mt-6 text-white">
                        &copy; Olaleye Fuad. 2022.
                    </p>
                    <div className="flex flex-row space-x-6 mt-4">
                        <a href="github.com/theylovefuad"><AiFillGithub className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                        <a href="instagram.com/theylovefuad"><AiOutlineInstagram className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                        <a href=""><AiOutlineTwitter className='text-gray-400 text-2xl hover:text-slate-800' /></a>
                        <a href=""><AiOutlineGitlab className='text-gray-400 text-2xl hover:text-slate-800' /></a>

                    </div>
                </div>
                <div className="text-cityBlue">
                    <div className="flex flex-row space-x-8">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" className="text-white">Home</a>
                            <a href="#about" className="text-white">About</a>
                            <a href="#skills" className="text-white">Experience</a>
                            <a href="#portfolio" className="text-white">Portfolio</a>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <a href="#about" className="text-white">Contact</a>
                            <a href="#" className="text-white flex space-x-4 items-center"><i
                                className="bx bx-phone text-white"></i><span>+234
                                    704 7293 841</span></a>
                            <a href="#" className="text-white flex space-x-4 items-center"><i
                                className="bx bxs-envelope text-white"></i><span>leyefuad@gmail.com</span></a>

                        </div>

                    </div>
                </div>
            </footer>
        </body>

    )
}