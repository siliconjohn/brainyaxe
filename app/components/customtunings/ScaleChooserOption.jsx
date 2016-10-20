var React = require('react')

var ScaleChooserOption = ( props ) => {

  return (
    <option value={ props.scaleKey }>{ props.name }</option>
  )
}

module.exports = ScaleChooserOption
