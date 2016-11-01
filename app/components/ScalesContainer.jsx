var React = require('react')
var ReactDOM = require('react-dom')
import ScaleIntervals from 'ScaleIntervals'
import ScaleNoteChooser from 'ScaleNoteChooser'
import ScaleChooser from 'ScaleChooser'
import NoteCirclesScale from 'NoteCirclesScale'

var ScalesContainer = React.createClass({

  render: function() {
    return (
      <div className="main-menu">
        <div className="row">
          <div className="column small-centered large-8 medium-8 small-10 shadow">
            <div className="row title-bar shadow">
              <h2>Choose Scale</h2>
            </div>
            <div className="row menu-section">
              <div className="columns small-5 medium-4">
                <ScaleNoteChooser/>
              </div>
              <div className="columns small-7 medium-8">
                <ScaleChooser/>
              </div>
            </div>
            <div className="row menu-section no-pad-top">
              <div className="columns small-5 medium-4">
                <ScaleIntervals/>
              </div>
              <div className="columns small-7 medium-8">
                <NoteCirclesScale/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ScalesContainer 
