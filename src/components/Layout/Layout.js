import React, { useContext, useState, useRef, useEffect } from 'react'

import GlobalStyle from './GlobalStyle'
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import SmoothScroll from '../SmoothScroll'
import Grain from './Grain'

import { PreloaderContext } from './../../contexts/preloader'

const Layout = ({ 
	children,
	lang,
	location,
	contentTheme
}) => {
	
	const [menuOpen, setMenuOpen] = useState(false)
	const [showPreloader, setShowPreloader] = useState(true)
	const showFooter = location.pathname.includes('contact') || location.pathname.includes('404') ? false : true

  	return (
		<PreloaderContext.Provider value={showPreloader ? 'preloader' : 'no-preloader'}>
			<GlobalStyle shouldDisableScroll={menuOpen ? true : false} />
			{/* <Grain /> */}
			{showPreloader && (
				<Preloader showPreloader={e => setShowPreloader(e)} />
			)}
			<Header
				lang={lang}
				contentTheme={contentTheme}
				menuOpen={menuOpen}
				setMenuOpen={() => setMenuOpen(!menuOpen)}
			/>
			<Menu 
				lang={lang}
				contentTheme={contentTheme}
				menuOpen={menuOpen}
				currentLocation={location}
				setMenuOpen={() => setMenuOpen(!menuOpen)}
			/>
			<main>
				{children}
			</main>
			{showFooter && (
				<Footer
					lang={lang}
					contentTheme={contentTheme}
				/>
			)}
		</PreloaderContext.Provider>
	)
}

export default Layout
