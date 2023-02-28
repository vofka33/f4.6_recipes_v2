import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import '../styles/App.css'

import Main from './Main'
import Category from './Category'
import Recipe from './Recipe'


function App() {
	return (
		<Router>
		    <div className='main'>
                <div className='button'>
					<button><NavLink to={'/'}>Начало</NavLink></button>
                </div>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path={'/category/:category'} element={<Category />} />
					<Route path={'/recipe/:id'} element={<Recipe />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
