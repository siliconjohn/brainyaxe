import React from 'react'

const yOffset = 0.5 // this is used to not cover the fretboard outline

var FretboardFret = ( props ) => {
  let { x, height } = props

  return (
    <line x1={ x } y1={ yOffset } x2={ x } y2={  height - yOffset } className="fret"/>
  )
}

module.exports = FretboardFret
