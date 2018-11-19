import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Contact from './index'

it('render without crashing', () => {
  const parent = document.createElement('div')
  ReactDOM.render(<Contact />, parent)
  ReactDOM.unmountComponentAtNode(parent)
})

it('render correctly', () => {
  const tree = renderer.create(<Contact />).toJSON()
  expect(tree).toMatchSnapshot()
})