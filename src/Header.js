import React from 'react'

const Header = (props) => {
    const { theme } = props
    
    return (
        <header className='header' >
            <h1 className='header__title'>Where in the world?</h1>
            <button
                onClick={() => props.switchTheme()}
                className='header__switcher'
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
            
        </header>
    )
}

export default Header
