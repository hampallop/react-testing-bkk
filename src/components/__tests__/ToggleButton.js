import React from 'react'
import { shallow } from 'enzyme'
import ToggleButton from '../ToggleButton'
import Switch from '../../common/Switch'

test('`checked` is default to false', () => {
  const wrapper = shallow(<ToggleButton />)
  expect(wrapper.find('span').text()).toBe('off')
})

test('`checked` support prop sending', () => {
  const wrapper = shallow(<ToggleButton checked />)
  expect(wrapper.find('span').text()).toBe('on')
})

test('`checked` change when click', () => {
  const wrapper = shallow(<ToggleButton />)
  wrapper.find(Switch).simulate('click')
  expect(wrapper.find('span').text()).toBe('on')
})
