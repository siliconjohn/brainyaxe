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
        <li><a style={ linkStyle }><small>Options</small></a>
        <ul className="menu dark">
          <li className="pad-left dark-text"><small>HIGHLIGHTS</small></li>
        {
          intervals.map(( value, index ) => {

            let text = ordinalSuffixOf( value )
            if( fretboardHighlight.indexOf( value ) > -1 ) {
              text = `<strong><span class="dark-text">${text}<span></strong>`
            } else {
              text = `<span class="gray-text">${text}<span>`
            }

            return (
              <li key= { index }>

                <a style={ linkStyle }
                  onClick={ (e) => {
                    dispatch( changeFretboardHighlight( [value] ))
                  }} dangerouslySetInnerHTML={{ __html: text }}></a></li>
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
