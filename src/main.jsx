import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParticleBackground from './components/ParticleBackground'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<>
			<ParticleBackground />
			<App />
		</>
	</React.StrictMode>
)
