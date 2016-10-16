var React = require('react')

var CustomTuningOption = ( props ) => {
  return (
    <option value={ props.index }>{ props.note } - { props.index }</option>
  )
}

module.exports = CustomTuningOption
