import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Portfolio from './index'

it('render without crash', () => {
  const parent = document.createElement('main')
  ReactDOM.render(<Portfolio />, parent)
  ReactDOM.unmountComponentAtNode(parent)
})

it('render correctly', () => {
  const tree = renderer.create(<Portfolio />).toJSON()
  expect(tree).toMatchSnapshot()
})