import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import About from './index'

it('render without crashing', () => {
  const parent = document.createElement('div')
  ReactDOM.render(<About />, parent)
  ReactDOM.unmountComponentAtNode(parent)
})

it('render correctly', () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})