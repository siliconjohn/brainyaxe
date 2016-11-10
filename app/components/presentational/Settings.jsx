var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
import NumericInput from 'react-numeric-input'

export var Settings = React.createClass({

  render: function() {
     var { dispatch, fretboardNumberOfNotes, fretboardFretWidth,
           fretboardStringHeight } = this.props

    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-8 medium-10 small-10 shadow">
            <div className="row title-bar shadow">
              <h2>Settings</h2>
            </div>
            <div className="row menu-section">
              <div className="columns small-6">
                <label className="text-right middle">Number of notes on the Fretboard</label>
              </div>
              <div className="columns small-3">
                <NumericInput className="form-control" min={ 1 } max={ 100 } value={ fretboardNumberOfNotes }
                  onChange={ ( e ) => {
                    dispatch( actions.changeFretboardNumberOfNotes( e ))
                  }}/>
              </div>
              <div className="columns small-3">
              </div>
            </div>
            <div className="row menu-section">
              <div className="columns small-6">
                <label className="text-right middle">String Height</label>
              </div>
              <div className="columns small-3">
                <NumericInput className="form-control" min={ 30 } max={ 70 } value={ fretboardStringHeight }
                  onChange={ ( e ) => {
                    dispatch( actions.changeFretboardStringHeight( e ))
                  }}/>
              </div>
              <div className="columns small-3">
              </div>
            </div>
            <div className="row menu-section">
              <div className="columns small-6">
                <label className="text-right middle">Note Width</label>
              </div>
              <div className="columns small-3">
                <NumericInput className="form-control" min={ 50 } max={ 150 } value={ fretboardFretWidth }
                  onChange={ ( e ) => {
                    dispatch( actions.changeFretboardFretWidth( e ))
                  }}/>
              </div>
              <div className="columns small-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default connect(( state ) => {
  return {
    fretboardNumberOfNotes: state.fretboardNumberOfNotes,
    fretboardStringHeight: state.fretboardStringHeight,
    fretboardFretWidth: state.fretboardFretWidth
  }
})(Settings)
