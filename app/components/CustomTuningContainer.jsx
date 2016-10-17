var React = require('react')
var { connect } = require('react-redux')
var actions = require('../redux/actions')
import CustomTuningChooser from 'CustomTuningChooser'

export var CustomTuningContainer = React.createClass({

  render: function () {
    var num = this.props.numberOfCustomTuningStrings

    return (
      <div>
        <p>Or Create a Custom Tuning</p>
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
