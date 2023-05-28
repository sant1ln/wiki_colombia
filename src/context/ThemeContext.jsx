import React from 'react'
import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const Themes = {
	light: "light",
	dark: "dark"
}

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(Themes.light)

	const handleTheme = () => {
		theme === Themes.light ? setTheme(Themes.dark) : setTheme(Themes.light)
	}
	return (
		<ThemeContext.Provider value={{ handleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider