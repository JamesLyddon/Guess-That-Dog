import { useState, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticleBackground = () => {
	const [count, setCount] = useState(100)

	const init = useCallback(async (engine) => {
		await loadFull(engine)
	})

	return (
		<Particles
			options={{
				particles: {
					color: {
						value: ['#39A9DB'],
					},
					number: {
						value: count,
					},
					opacity: {
						value: { min: 0.3, max: 1 },
					},
					shape: {
						type: ['image', 'image'],
						options: {
							image: [
								{
									src: '/dog1.svg',
								},
								{
									src: '/dog2.svg',
								},
								{
									src: '/dog3.svg',
								},
								{
									src: '/dog4.svg',
								},
								{
									src: '/dog5.svg',
								},
								{ src: '/dog6.svg' },
							],
						},
					},
					size: {
						value: { min: 0.1, max: 50 },
					},
					move: {
						direction: 'top-right',
						enable: true,
						speed: { min: 3, max: 5 },
						straight: false,
					},
					rotate: {
						value: {
							min: 0,
							max: 360,
						},
						direction: 'random',
						animation: {
							enable: true,
							speed: 10,
						},
					},
					tilt: {
						direction: 'random',
						enable: true,
						value: {
							min: 0,
							max: 360,
						},
						animation: {
							enable: true,
							speed: 10,
						},
					},
					roll: {
						darken: {
							enable: true,
							value: 5,
						},
						enable: true,
						speed: {
							min: 5,
							max: 15,
						},
					},
				},
			}}
			init={init}
		/>
	)
}

export default ParticleBackground
