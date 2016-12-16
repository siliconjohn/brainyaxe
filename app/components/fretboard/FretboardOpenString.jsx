import React from 'react' 

var FretboardOpenString = ( props ) => {
  let { y, width, noteName, height } = props

  // if is a long note name: "G♯/A♭", truncate to only show one part of the noteName
  // and adjust centerX to keep centered
  if( noteName.length == 5 ) {
    // get the ♭ (flat) part
    //noteName = noteName.substring( 3, 5 )
    // or use this:
    // get the ♯ (sharp) part
    noteName = noteName.substring( 0, 2 )
  }

  // find center
  let centerX = width / 2
  let centerY = y + height / 2

  return (
    <g className="open-string">
      <text x={ centerX } y={ centerY } textAnchor="middle" dominantBaseline="central"
        className="open-string-text">{ noteName }
      </text>
    </g>
  )
}

module.exports = FretboardOpenString
