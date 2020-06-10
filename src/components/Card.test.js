import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer';


it('expect to render Card component', () => {
	const tree = renderer.create(<Card />).toJSON()
	expect(tree).toMatchSnapshot()
})
