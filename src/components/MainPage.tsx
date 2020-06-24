import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'
import { IRobot, IAppProps, IAppState } from '../containers/App'
import './MainPage.css'

class MainPage extends Component<IAppProps, IAppState> {
	componentDidMount() {
		this.props.onRequestRobots()
	}

	filterRobots = (): IRobot[] => {
		return this.props.robots.filter((robot: IRobot) => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}

	render() {
		const { onSearchChange, isPending } = this.props

		return (
			<div className='tc'>
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					{isPending ? <h1>Loading</h1> :
						<ErrorBoundary>
							<CardList robots={this.filterRobots()} />
						</ErrorBoundary>
					}
				</Scroll>
			</div>
		)
	}
}

export default MainPage
