var React = require('react')
var FretboardString = require('FretboardString')
var FretboardNut = require('FretboardNut')
var FretboardFret = require('FretboardFret')
var FretboardBackground = require('FretboardBackground')
var FretboardOpenString = require('FretboardOpenString')
var {getNoteNameFromMIDINumber} = require('../utils');

var FretboardSVG = React.createClass({

  render: function () {
    var {tuning, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord} = this.props

    //calculate dimensions
    var numStrings = tuning.midiNotes.length
    var stringHeight = 40
    var width = 1507
    var height = (2 + numStrings) * stringHeight
    var fretboardHeight = stringHeight * numStrings
    var nutWidth = 5
    var openWidth = 50
    var fretWidth = 70

    var renderBackground = () => {
      var tempProps = { height: fretboardHeight, width: width - openWidth, x: openWidth, y:0  }
      return ( <FretboardBackground {...tempProps}/> )
    }

    var renderNut = () => {
      var tempProps = { height: fretboardHeight, width:nutWidth, x:openWidth}
      return ( <FretboardNut {...tempProps}/> )
    }

    var renderOpenStrings = () => {
      var result = []

      for(var i = 0; i < numStrings; i++ ) {
        var tempProps = { y:(stringHeight * i)+stringHeight/2, width: openWidth,
                          note:getNoteNameFromMIDINumber(tuning.midiNotes[i]), key:i+1 }
        result.push ( <FretboardOpenString {...tempProps}/> )
      }

      return result
    }

    var renderFrets = () => {
      var result = []
      var tempFretWidth = fretWidth
      var fretx = openWidth + nutWidth + fretWidth

      for(var i = 1; i <= numberOfNotesOnFretboard; i++ ) {
        var tempProps = { height: fretboardHeight, width:2, x:fretx ,key:i }
        result.push ( <FretboardFret {...tempProps}/> )
        tempFretWidth--
        fretx += tempFretWidth
      }

      return result
    }

    var renderStringLines = () => {
      var result = []

      for(var i=1;i <= numStrings; i++ ){
        var tempProps = { key: i,
                            x: openWidth + nutWidth,
                            y:(i * stringHeight) - (stringHeight/2) }

        result.push ( <FretboardString {...tempProps}/> )
      }

      return result
    }

    return (
      <div className="row">
        <div className="fretboard-parent column small-centered large-12 medium-12 small-12">
          <svg className="fretboard-svg" width={width} height={height}>
            {renderBackground()}
            {renderNut()}
            {renderFrets()}
            {renderStringLines()}
            {renderOpenStrings()}
          </svg>
        </div>
      </div>
    )
  }
})

module.exports = FretboardSVG
