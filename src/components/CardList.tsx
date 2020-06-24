import React from 'react'
import Card from './Card'
import { IRobot } from '../containers/App'

interface IRobots {
	robots: IRobot[]
}

const CardList = ({ robots }: IRobots) => {
	return (
		<div>
			{
				robots.map((robot) => {
					return (
						<Card
							key={robot.id}
							id={robot.id}
							name={robot.name}
							email={robot.email}
						/>
					)
				})
			}
		</div>
	)
}

export default CardList