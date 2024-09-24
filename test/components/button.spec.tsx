import React from 'react'
import renderer from 'react-test-renderer'
import { expect, it } from 'vitest'

import { TributeMention } from '../../src'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

it('link changes the class when hovered', () => {
  const component = renderer.create(<TributeMention>Yuns</TributeMention>)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
