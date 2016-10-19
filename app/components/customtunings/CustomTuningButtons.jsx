var React = require("react")
var { connect } = require('react-redux')
var actions = require('actions')

export var CustomTuningButtons = React.createClass({

  render: function() {
    var { dispatch } = this.props

    return (
      <div className="float-right">
        <a className="button tiny success btn-wide"
         onClick={ (e) => {
           dispatch( actions.incrementCustomTuningStrings())
          }}>
         Add String
        </a>
        <a className="button tiny alert btn-wide"
          onClick={ (e) => {
            dispatch( actions.decrementCustomTuningStrings())
          }}>
         Remove String
        </a>
      </div>
    )
  }
})

export default connect(( state ) => {
  return {
    numberOfCustomTuningStrings: state.numberOfCustomTuningStrings
  }
})( CustomTuningButtons )
