import React from 'react'
import { useEffect } from 'react'
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
		localStorage.setItem("Theme", JSON.stringify(theme))
	}

	useEffect(() => {
		if (localStorage.getItem("Theme")) {
			const localStorageTheme = JSON.parse(localStorage.getItem("Theme"))
			localStorageTheme === Themes.light ? setTheme(Themes.dark) : setTheme(Themes.light)
		}
	}, [])

	return (
		<ThemeContext.Provider value={{ handleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider