import React from 'react'
import CustomTuningContainer from 'CustomTuningContainer'
import TuningChooser from 'TuningChooser'

export class TuningsContainer extends React.Component {

  render() {
    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-10 medium-10 small-10">
            <div className="row title-bar shadow">
             Choose Tuning
            </div>
            <div className="row menu-section shadow">
              <div className="columns small-12">
                <TuningChooser ref="tuningChooser"/>
              </div>
              <div className="columns small-12">
                <CustomTuningContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TuningsContainer
