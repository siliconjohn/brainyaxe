const React = require('react')
import CustomTuningChooser from 'CustomTuningChooser'

export var CustomTuningContainer = React.createClass({

  render: function () {
    return (
      <div>
        <p>Or Create a Custom Tuning</p>
        <CustomTuningChooser key="0" stringNumber="0"/>
        <CustomTuningChooser key="1" stringNumber="1"/>
        <CustomTuningChooser key="2" stringNumber="2"/>
        <CustomTuningChooser key="3" stringNumber="3"/>
        <CustomTuningChooser key="4" stringNumber="4"/>
        <CustomTuningChooser key="5" stringNumber="5"/>
        <CustomTuningChooser key="6" stringNumber="6"/>
        <CustomTuningChooser key="7" stringNumber="7"/>
      </div>
    )
  }
})

module.exports = CustomTuningContainer
