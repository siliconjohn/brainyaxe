var React = require('react')

var TuningChooserOption = ( props ) => {

  return (
    <option className="tuning-chooser-option" value={ props.tuningKey }>
      { props.name } - { props.notes }
    </option>
  )
}

module.exports = TuningChooserOption
