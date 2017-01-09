import React from 'react'
import { connect } from 'react-redux'
import { changeFretboardTheme } from 'actions'
import { ordinalSuffixOf } from 'utils'

// inline style because I think foundation.js is messing with it and this
// is the only way I can get it to work
const linkStyle = {
  paddingTop: "4px",
  paddingBottom: "4px"
}

export class FretboardThemeChooser extends React.Component {

  render() {
    var { dispatch, fretboardThemes, fretboardTheme } = this.props

    return (
      <ul className="dropdown menu" data-dropdown-menu>
        <li><a style={ linkStyle }><small>THEME</small></a>

        <ul className="menu dark">
        {
          fretboardThemes.map(( value, index ) => {
            let text = value
            if(   value == fretboardTheme ) {
              text = `<strong><span class="dark-text">${text}<span></strong>`
            } else {
              text = `<span class="gray-text">${text}<span>`
            }

            return (
              <li key= { index }>
                <a style={ linkStyle }
                  onClick={ (e) => {
                    dispatch( changeFretboardTheme( value ))
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
    fretboardThemes: state.fretboardThemes,
    fretboardTheme: state.fretboardTheme,
  }
})( FretboardThemeChooser )
