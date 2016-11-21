import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import React from 'react' 
import Toolbar from 'Toolbar'

describe( 'Toolbar', () => {

  it( 'should exist', () => {
    expect( Toolbar ).toExist()
  })

  it( 'should exist', () => {
    const renderer = ReactTestUtils.createRenderer()
    renderer.render(<Toolbar />)
    const result = renderer.getRenderOutput()
    expect(result.type).toBe('div')

  })

})
