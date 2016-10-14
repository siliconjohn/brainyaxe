const React = require('react')
import CustomTuningChooser from 'CustomTuningChooser'

export var CustomTuningContainer = React.createClass({

  render: function () {
    return (
      <div>
        <p>Or Create a Custom Tuning</p>
        <CustomTuningChooser keyid="0"/>
        <CustomTuningChooser keyid="1"/>
        <CustomTuningChooser keyid="2"/>
        <CustomTuningChooser keyid="3"/>
        <CustomTuningChooser keyid="4"/>
        <CustomTuningChooser keyid="5"/>
        <CustomTuningChooser keyid="6"/>
        <CustomTuningChooser keyid="7"/>
      </div>
    )
  }
})

module.exports = CustomTuningContainer
