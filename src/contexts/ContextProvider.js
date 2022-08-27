import React, { createContext, useContext } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = React.useState(true)
    const [isClicked, setIsClicked] = React.useState(initialState)
    const [screenSize, setScreenSize] = React.useState(undefined)
    const [currentColor, setCurrentColor] = React.useState('#03C9D7')
    const [currentMode, setCurrentMode] = React.useState('Light')
    const [themeSettings, setThemeSettings] = React.useState(false)

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })

    }
    const closeClick = (clicked) => {
        setIsClicked({ initialState })
    }
    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (mode) => {
        setCurrentColor(mode)

        localStorage.setItem('colorMode', mode)
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked,
            handleClick,
            screenSize, setScreenSize,
            currentColor, currentMode,
            setCurrentColor, setCurrentMode,
            themeSettings, setThemeSettings,
            setMode, setColor,
            closeClick
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)