var React = require('react')
var { connect } = require('react-redux')
var actions = require('../redux/actions')
import CustomTuningButtons from 'CustomTuningButtons'
import CustomTuningChooser from 'CustomTuningChooser'

export var CustomTuningContainer = React.createClass({

  render: function () {
    var num = this.props.numberOfCustomTuningStrings

    return (
      <div  >
        <div className="row">
          <div className="small-7 medium-7 columns">
            <p><strong>Or Create a Custom Tuning</strong></p>
          </div>
          <div className="small-5 medium-5 columns">
            <CustomTuningButtons/>
          </div>
        </div>
        <p>Strings {num} to 1, the lowest is first.</p>
        {
          Array( num ).fill().map(( _, i ) => {
            return (
              <CustomTuningChooser key={ i } stringNumber={ i }/>
            )
          })
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
