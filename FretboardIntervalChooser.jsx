import React from 'react'
import { connect } from 'react-redux'
import { changeFretboardHighlight } from 'actions'
import { ordinalSuffixOf } from 'utils'

const intervals = [ 1, 2, 3, 4, 5, 6, 7 ]

// inline style because I think foundation.js is messing with it and this
// is the only way I can get it to work
const linkStyle = {
  paddingTop: "4px",
  paddingBottom: "4px"
}

export class FretboardIntervalChooser extends React.Component {

  render() {
    var { dispatch, fretboardHighlight } = this.props
    return (
      <ul className="dropdown menu" data-dropdown-menu>
        <li><a href="#" style={ linkStyle }>Options</a>
        <ul className="menu dark">
          <li className="dark pad-left">Highlight:</li>
        {
          intervals.map(( value, index ) => {

            let check = ""
            if( fretboardHighlight.indexOf( value ) > -1 ) check = "- "

            return (
              <li key= { index }>

                <a href="#"  style={ linkStyle }
                  onClick={ (e) => {
                    dispatch( changeFretboardHighlight( [value] ))
                  }}>{check}{ ordinalSuffixOf( value )}</a></li>
            )
          })
        }
        </ul>
      </li>
    </ul>
    )
  }
}

export default connect(( state ) => {
  return {
    fretboardHighlight: state.fretboardHighlight
  }
})( FretboardIntervalChooser )
