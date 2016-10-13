const React = require('react');
var CustomTuningChooser = require('CustomTuningChooser')

export var CustomTuningContainer = React.createClass({

  render: function () {
    return (
      <div>
        <p>Or Create a Custom Tuning</p>
        <CustomTuningChooser key="1"/>
        <CustomTuningChooser key="2"/>
        <CustomTuningChooser key="3"/>
        <CustomTuningChooser key="4"/>
        <CustomTuningChooser key="5"/>
        <CustomTuningChooser key="6"/>
        <CustomTuningChooser key="7"/> 
      </div>
    )
  }
})

module.exports = CustomTuningContainer
