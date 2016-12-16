var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
import CustomTuningButtons from 'CustomTuningButtons'
import CustomTuningNoteChooser from 'CustomTuningNoteChooser'

export var CustomTuningContainer = React.createClass({

  render: function () {
    var num = this.props.numberOfCustomTuningStrings
    var result = []

    return (
      <div>
        <div className="text-center smaller-font"><strong>Custom Tuning</strong></div>
        <br></br>
        <div className="row">
          <div className="column small-centered large-12 medium-12 small-12 smaller-font">
            Strings {num} to 1, the lowest is first and the highest is last
              <CustomTuningButtons/>
          </div>
        </div>
        {
          Array( num ).fill().map(( _, i ) => {
            return (
              <CustomTuningNoteChooser key={ i } stringNumber={ i }/>
            )
          }).reverse()
        }
      </div>
    )
  }
})

export default connect(( state ) => {
  return {
      numberOfCustomTuningStrings: state.numberOfCustomTuningStrings
  }
})(CustomTuningContainer)
