var React = require('react')

var TuningChooserOption = ( props ) => {

  return (
    <option value={ props.tuningKey }>{ props.name } - { props.notes }</option>
  )
}

module.exports = TuningChooserOption
