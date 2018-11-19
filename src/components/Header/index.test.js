import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Header from './index'

const parent = document.createElement('div')

it('render without crashing', () => {
  ReactDOM.render(<Header />, parent)
  ReactDOM.unmountComponentAtNode(parent)
})

it('renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
});