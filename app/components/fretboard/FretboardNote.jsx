import React from 'react'
import { connect } from 'react-redux'

const radius = 12 // size of note's circle

export class FretboardNote extends React.Component {

  getDegreeClassName() {
    let { scaleDegree, chordDegree, fretboardHighlight } = this.props

    let degree = scaleDegree ? scaleDegree : chordDegree

    if( degree ) {
      degree = degree.replace( /♭|♯/g, "" )

      // add the .highlight class if the note is to be highlighted
      let highlight = ""
      if( fretboardHighlight.indexOf( parseInt( degree )) > -1 ) highlight = "highlight "

      return `${highlight}degree-${degree}`
    }

    return ""
  }

  getNoteText() {
    let { noteName } = this.props

    // if is a long note name: "G♯/A♭", truncate to only show one part of the noteName
    // and adjust centerX to keep centered
    if( noteName.length == 5 ) {
      // get the ♭ (flat) part
      //noteName = noteName.substring( 3, 5 )
      // or use this:
      // get the ♯ (sharp) part
      noteName = noteName.substring( 0, 2 )
    }

    return (
      <text x={ this.centerX } y={ this.centerY }  textAnchor="middle" dominantBaseline="central"
        className="note-text">{ noteName }
      </text>
    )
  }

  getNoteDegreeText() {
    let { fretboardShowDegree, fretboardOpenNoteWidth } = this.props

    if( fretboardShowDegree == false ) return

    let { scaleDegree, chordDegree } = this.props

    let degree = scaleDegree ? scaleDegree : chordDegree

    if( degree ) {
      let x = this.centerX + radius * 0.8
      let y = this.centerY + radius * 0.6

      // if the note is an open note ( before the nut), we need to snug the text to make it fit
      if( x <= fretboardOpenNoteWidth ) {
        x = this.centerX + radius * 0.4
        y = this.centerY + radius * 0.9
      }

      return (
        <text x={ x } y={ y } textAnchor="start" dominantBaseline="hanging"
          className="note-text-degree">{ degree }
        </text>
      )
    }
  }

  render() {
    const { parentFretX, parentFretY, parentFretWidth, parentFretHeight } = this.props

    this.centerX = parentFretX + parentFretWidth / 2
    this.centerY = parentFretY + parentFretHeight / 2

    let classes = `note ${this.getDegreeClassName()} `

    return (
      <g className={ classes } cursor="default">
        <circle cx={ this.centerX } cy={ this.centerY } r={ radius } className="note-circle"/>
        { this.getNoteText() }
        { this.getNoteDegreeText() }
      </g>
    )
  }
}

FretboardNote.propTypes = {
  noteName: React.PropTypes.string.isRequired,
  parentFretX: React.PropTypes.number.isRequired,
  parentFretY: React.PropTypes.number.isRequired,
  parentFretWidth: React.PropTypes.number.isRequired,
  parentFretHeight: React.PropTypes.number.isRequired,
  scaleNote: React.PropTypes.string,
  chordNote: React.PropTypes.string,
  scaleDegree: React.PropTypes.string,
  chordDegree: React.PropTypes.string,
  fretboardHighlight: React.PropTypes.array.isRequired,
  fretboardOpenNoteWidth: React.PropTypes.number.isRequired,
  fretboardShowDegree: React.PropTypes.bool.isRequired,
}

export default connect(( state ) => {
  return {
    fretboardHighlight: state.fretboardHighlight,
    fretboardOpenNoteWidth: state.fretboardOpenNoteWidth,
    fretboardShowDegree: state.fretboardShowDegree,
  }
})( FretboardNote )
