import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './constants'

import { IRobot } from './containers/App'

type ChangeSearchFieldType = 'CHANGE_SEARCH_FIELD'
type RequestRobotsType = 'REQUEST_ROBOTS_PENDING' | 'REQUEST_ROBOTS_SUCCESS' | 'REQUEST_ROBOTS_FAILED'

interface ISearchRobots {
	searchField: string
}

export interface ISearchRobotsAction {
	type: ChangeSearchFieldType
	payload: string
}

interface IRequestRobots {
	isPending: boolean
	robots: IRobot[]
	error: string
}

interface IRequestRobotsAction {
	type: RequestRobotsType
	payload: IRobot[]
}

const initialStateSearch: ISearchRobots = {
	searchField: '',
}

export interface IReduxState {
	searchRobots: ISearchRobots
	requestRobots: IRequestRobots
}

export const searchRobots = (state = initialStateSearch, action: ISearchRobotsAction = {} as ISearchRobotsAction) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload })
		default:
			return state
	}
}

const initialStateRobots: IRequestRobots = {
	isPending: false,
	robots: [],
	error: '',
}

export const requestRobots = (state = initialStateRobots, action: IRequestRobotsAction = {} as IRequestRobotsAction) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false })
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state
	}
}
