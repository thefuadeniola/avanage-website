import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import { links } from '../data/dummy'

const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 hover:text-black hover:bg-light-gray m-2'

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  return (
    <div className='ml-3 md:overflow-hidden overflow-auto md:hover:overflow-auto h-screen pb-10'>
      {activeMenu &&
        (
          <>
            <div className="flex justify-between items-center">

              <Link to='/' onClick={handleCloseSidebar} className='items-center gap-3 ml-3 mt-4 flex text-xl tracking-tight dark:text-white text-slate-900'>
                <SiShopware /> <span>Shoppy</span>
              </Link>

              <TooltipComponent content='Menu' position='BottomCenter'>
                <button type='button' onClick={() => setActiveMenu((oldActive) => !oldActive)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>

            </div>

            <div className='mt-10'>

              {links.map((link) => (
                <div key={link.title}>
                  <p className='text-gray-400 m-3 mt-4 uppercase'>{link.title}</p>
                  {link.links.map((itemLink) => (

                    <NavLink
                      onClick={handleCloseSidebar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : ''
                      })}
                      className={({ isActive }) => isActive ? activeLink : normalLink}
                      key={itemLink.name} to={`/${itemLink.name}`}>
                      {itemLink.icon}
                      <span className='capitalize'>{itemLink.name}</span>
                    </NavLink>

                  ))}</div>
              ))}
            </div>
          </>
        )}
    </div>
  )
}

export default Sidebar