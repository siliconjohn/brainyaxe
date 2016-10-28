var React = require('react')

var Toolbar = React.createClass({

  render: function() {

    return (
      <div className="title-bar">
        <div className="title-bar-left">
          <h5>Fret Kit</h5>
        </div>
        <div className="title-bar-right">
          <button className="menu-icon" type="button"></button>
        </div>
        <div className="row column medium-6 medium-centered small-8 small-centered">
          <ul className="tabs text-center shadow toolbar-tabs" data-tabs id="toolbar-tabs">
            <li className="tabs-title"><a href="#scales-panel">Scales</a></li>
            <li className="tabs-title is-active"><a href="#tunings-panel" aria-selected="true">Tunings</a></li>
            <li className="tabs-title"><a href="#chords-panel">Chords</a></li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Toolbar
