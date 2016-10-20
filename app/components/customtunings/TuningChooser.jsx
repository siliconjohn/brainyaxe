var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var TuningOption = require('TuningOption')

export var TuningChooser = React.createClass({

  render: function() {
    var { dispatch, tunings, selectedTuningKey } = this.props

    return (
      <select value={ selectedTuningKey } className="tuning-select"
        onChange={ (e) => {
          dispatch( actions.changeTuning( e.target.value ))
        }}>

        {
          tunings.map(( tuning, index ) => {
            var tempProps = { tuningKey:tuning.key, name:tuning.name, notes:tuning.notes }

            return (
              <TuningOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
})

export default connect(( state ) => {
  return {
    tunings: state.tunings,
    selectedTuningKey: state.selectedTuningKey
  }
})(TuningChooser)
