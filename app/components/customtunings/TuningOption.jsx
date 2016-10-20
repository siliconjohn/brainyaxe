var React = require('react')

var TuningOption = ( props ) => {

  return (
    <option value={ props.tuningKey }>{ props.name } - { props.notes }</option>
  )
}

module.exports = TuningOption
