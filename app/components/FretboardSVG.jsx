var React = require('react');
var StringLine = require('StringLine');
var FretboardNut = require('FretboardNut');
var FretboardSVG = React.createClass({

  render: function () {
    var {tuning, numberOfNotesOnFretboard, selectedNotesForScale,
         selectedNotesForChord} = this.props;

    //calculate dimensions
    var numStrings = tuning.midiNotes.length
    var stringHeight = 40
    var width = 2000
    var height = (2 + numStrings) * stringHeight
    var fretboardHeight = stringHeight * numStrings
    var nutWidth = 5
    var openWidth =50

    var renderNut = () => {
      var nutProps = { height: fretboardHeight, width:nutWidth, x:openWidth}
      return ( <FretboardNut {...nutProps}/> )
    }

    var renderStringLines = () => {
      var result = []

      for(var i=1;i <= numStrings; i++ ){
        var stringProps = { key: i,
                            x: openWidth + nutWidth,
                            y:(i * stringHeight) - (stringHeight/2) }

        result.push ( <StringLine {...stringProps}/> );
      }

      return result
    }

    return (
      <div className="row">
        <div className="fretboard-parent column small-centered large-12 medium-12 small-12">

        <svg width={width} height={height}>

          {/* gray background, remove later */}
          <rect x="0" y="0" width="100%" height={fretboardHeight} fill="gray"/>

          {renderNut()}
          {renderStringLines()}



        </svg>
      </div>
    </div>
    )
  }
})

module.exports = FretboardSVG
