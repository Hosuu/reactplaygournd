import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'

const GlobalCss = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		font-family: Comfortaa;
		background-color: #242424;
		line-height: 1em;
		background: url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
		background-size: cover;
	}
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalCss />
		<App />
	</React.StrictMode>
)
