var React = require('react')
var { connect } = require('react-redux')
var actions = require('actions')
var ScaleOption = require('ScaleOption')

export var ScaleChooser = React.createClass({

  render: function() {
    var { dispatch, scales, selectedScaleKey } = this.props

    return (
      <select value={ selectedScaleKey } className="scale-select"
        onChange={ (e) => {
          dispatch( actions.changeScale( e.target.value ))
        }}>

        {
          scales.map(( scale, index ) => {
            var tempProps = { scaleKey:scale.key, name:scale.name }

            return (
              <ScaleOption key={ index } { ...tempProps }/>
            )
          })
        }

      </select>
    )
  }
})

export default connect(( state ) => {
  return {
    scales: state.scales,
    selectedScaleKey: state.selectedScaleKey
  }
})(ScaleChooser)
