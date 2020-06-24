import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPage from '../components/MainPage'
import './App.css'

import { setSearchField, requestRobots } from '../actions'
import { IReduxState } from '../reducers'

export interface IRobot {
	name: string
	id: number
	email: string
}

export interface IAppState {
	robots: IRobot[]
	searchField: string
}

interface IStateProps {
	robots: IRobot[]
	searchField: string
	isPending: boolean
	error: string
}

interface IDispatchProps {
	onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
	onRequestRobots: () => void
}

export type IAppProps = IStateProps & IDispatchProps


// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state: IReduxState): IStateProps => ({
	searchField: state.searchRobots.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error,
})

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
	onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void => dispatch(setSearchField(event.currentTarget.value)),
	onRequestRobots: (): void => dispatch(requestRobots()),
})

class App extends Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props)
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	render(): JSX.Element {
		return(
			<MainPage {...this.props}/>
		)
	}
}

// action done from mapDispatchToProps will change state from mapStateToProps
export default connect<IStateProps, IDispatchProps, {}, IReduxState>(mapStateToProps, mapDispatchToProps)(App)
