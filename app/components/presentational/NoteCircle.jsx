var React = require('react')

var NoteCircle = ( props ) => {

  var { noteName, interval, colorClassName } = props

  var size = 45
  var fontSize = 18         //  should match the css size
  var degreeFontSize = 12   //  should match the css size

  // derived values for sizes
  var smallerSize = size - 10
  var fontOffset = fontSize / 3
  var longNoteNameOffset = fontSize / 5
  var degreeFontSizeOffset = degreeFontSize / 2

  // additional class to change the circle's css
  var newClassName = "note-circle-bg "
  if( colorClassName != undefined ){
    newClassName = newClassName + colorClassName
  }

  // short long notename so it fits in the circle
  noteName.length > 1 ? noteName = noteName.substring( 0, 2 ) : longNoteNameOffset = 0

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size }
      className="note-circle">
      <g transform="translate(1,1)">
        <circle cx={ smallerSize / 2 } cy={ smallerSize / 2  } r={ smallerSize / 2 }
          className={ newClassName }/>
        <text x={ smallerSize / 2 - fontOffset - longNoteNameOffset }
          y={ smallerSize / 2 + fontOffset  }
          className="note-circle-name">{ noteName }</text>
        <text x={ smallerSize - degreeFontSizeOffset } y={ smallerSize  }
          className="note-circle-degree">{ interval }</text>
      </g>
    </svg>
  )
}

module.exports = NoteCircle
