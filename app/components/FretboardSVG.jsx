var React = require('react')
var FretboardString = require('FretboardString')
var FretboardNut = require('FretboardNut')
var FretboardFret = require('FretboardFret')
var FretboardBackground = require('FretboardBackground')
var FretboardOpenString = require('FretboardOpenString')
var FretboardOpenNote = require('FretboardOpenNote');
var {getNoteNameFromMIDINumber} = require('../utils');

var FretboardSVG = React.createClass({

  render: function () {
    var {tuning, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord} = this.props

    //calculate dimensions
    var stringHeight = 40
    var nutWidth = 5
    var openWidth = 50
    var fretWidth = 70
    var numStrings = tuning.midiNotes.length
    var height = (2 + numStrings) * stringHeight
    var fretboardHeight = stringHeight * numStrings
    var width = (fretWidth * numberOfNotesOnFretboard) + nutWidth + openWidth

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

    var renderNotes = () => {
      var result = []

      // add open string notes
      for(var i=1;i <= numStrings; i++ ){
        var tempProps = { x: 0, y:(stringHeight * (i-1)), width: openWidth,
                          midiNote: tuning.midiNotes[i], height: stringHeight,
                          note:getNoteNameFromMIDINumber(tuning.midiNotes[i]), key:i+1 }
        result.push ( <FretboardOpenNote {...tempProps}/> )
      }

      var tempfretWidth = fretWidth
      var tempfretX = 2

      // add notes on fretboard for each string
      for(var i=1;i <= numStrings; i++ ){

        var fretx = openWidth + nutWidth
        var notey = (stringHeight * (i-1));

        for(var a = 1; a <= numberOfNotesOnFretboard; a++ ) {
          var xx = a == 1 ? 0 : tempfretX
          var ww = a == 1 ? 0 : 2
          var tempProps = { x: fretx + xx, y:notey, width: tempfretWidth - ww,
                            midiNote: tuning.midiNotes[i+a], height: stringHeight,
                            note:getNoteNameFromMIDINumber(tuning.midiNotes[i+a]), key: i + "-" + a + "-" + tuning.midiNotes[i+a] }
          result.push ( <FretboardOpenNote {...tempProps}/> )

          fretx+= fretWidth
        }
      }

      return result
    }

    var renderFrets = () => {
      var result = []
      var fretx = openWidth + nutWidth + fretWidth

      for(var i = 1; i <= numberOfNotesOnFretboard; i++ ) {
        var tempProps = { height: fretboardHeight, width:2, x:fretx ,key:i }
        result.push ( <FretboardFret {...tempProps}/> )
        fretx += fretWidth
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
            {renderNotes()}
            {renderOpenStrings()}

          </svg>
        </div>
      </div>
    )
  }
})

module.exports = FretboardSVG
