import React from 'react'

var FretboardNut = ( props ) => {
  let { numberOfStrings, fretboardNutWidth, fretboardStringHeight,
        fretboardOpenNoteWidth } = props

  let nutSize = {}
  nutSize.x = fretboardOpenNoteWidth
  nutSize.y = 1
  nutSize.height = fretboardStringHeight * numberOfStrings
  nutSize.width = fretboardNutWidth

  return (
    <rect { ...nutSize } className="nut"/>
  )
}

module.exports = FretboardNut
