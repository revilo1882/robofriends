import React, { Component } from 'react';

interface ICounterProps {
	color?: string
}

interface ICounterState {
	count: number
}

class CounterButton extends Component<ICounterProps, ICounterState>{
	constructor(props: ICounterProps) {
		super(props)
		this.state = { count: 0 }
	}

	shouldComponentUpdate(_nextProps: ICounterProps, nextState: ICounterState) {
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<button
				id='counter'
				color={this.props.color}
				onClick={() => this.setState(state => ({ count: state.count + 1 }))}
			>
				count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton
