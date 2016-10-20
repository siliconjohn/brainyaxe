var React = require('react')

var ScaleOption = ( props ) => {

  return (
    <option value={ props.scaleKey }>{ props.name }</option>
  )
}

module.exports = ScaleOption
