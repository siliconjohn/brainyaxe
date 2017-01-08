import React from 'react'
import ChordIntervals from 'ChordIntervals'
import ChordNoteChooser from 'ChordNoteChooser'
import ChordChooser from 'ChordChooser'

export class ChordsContainer extends React.Component{

  render() {
    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10 shadow">
            <div className="row title-bar shadow">
              Choose Chord
            </div>
            <div className="row menu-section">
              <div className="columns small-5 medium-4">
                <ChordNoteChooser/>
              </div>
              <div className="columns small-7 medium-8">
                <ChordChooser/>
              </div>
            </div>
            <div className="row menu-section no-pad-top">
              <div className="columns small-5 medium-4">
                <ChordIntervals/>
              </div>
              <div className="columns small-7 medium-8">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = ChordsContainer
