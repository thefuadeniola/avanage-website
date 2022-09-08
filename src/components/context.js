import React, { useState, useContext, createContext } from 'react'

const MenuContext = createContext()

export default function ContextProvider({ children }) {
    const [isMenu, setIsMenu] = React.useState(false)
    const handleClick = () => {
        setIsMenu(oldMenu => !oldMenu)
    }

    return (
        <MenuContext.Provider value={{ isMenu, setIsMenu, handleClick }}>
            {children}
        </MenuContext.Provider>
    )
}
export const useStateContext = () => useContext(MenuContext)