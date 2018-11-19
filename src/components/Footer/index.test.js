import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Footer from './index'

it('render without crashing', () => {
  const parent = document.createElement('div')
  ReactDOM.render(<Footer />, parent)
  ReactDOM.unmountComponentAtNode(parent)
})

it('render correctly', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})