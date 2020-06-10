import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPage from '../components/MainPage'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = state => ({
	searchField: state.searchRobots.searchField,
	robots: state.requestRobots.robots,
	isPending: state.requestRobots.isPending,
	error: state.requestRobots.error,
})

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch) => ({
	onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
	onRequestRobots: () => dispatch(requestRobots()),
})

class App extends Component {
	render() {
		return(
			<MainPage {...this.props}/>
		)
	}
}

// action done from mapDispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
