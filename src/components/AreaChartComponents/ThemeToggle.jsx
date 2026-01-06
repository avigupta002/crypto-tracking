import React from 'react'

const ThemeToggle = ({theme, toggleTheme}) => {
  return (
    <button 
    onClick={toggleTheme}
    className='bg-gray-300 px-4 py-2 rounded'>
         {theme === "dark" ? "🌙" : "🌞"}
    </button>
  )
}

export default ThemeToggle