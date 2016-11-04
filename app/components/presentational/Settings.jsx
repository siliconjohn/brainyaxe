var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
import NumericInput from 'react-numeric-input'

export var Settings = React.createClass({

  render: function() {
     var { dispatch, fretboardNumberOfNotes } = this.props

    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-8 medium-10 small-10">
            <div className="row title-bar shadow">
              <h2>Settings</h2>
            </div>
            <div className="row menu-section shadow">
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
          </div>
        </div>
      </div>
    )
  }
})

export default connect(( state ) => {
  return {
    fretboardNumberOfNotes: state.fretboardNumberOfNotes
  }
})(Settings)
