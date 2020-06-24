import React, { Component } from 'react'

interface IErrorBoundaryProps {
	children: JSX.Element
}

interface IErrorBoundaryState {
	hasError: boolean
}


class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState>{
	constructor(props: IErrorBoundaryProps) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary
