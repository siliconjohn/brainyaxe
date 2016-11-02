var React = require('react')
var { Link, IndexLink } = require('react-router')

var Toolbar = React.createClass({

  render: function() {
    return (
      <div className="top-bar shadow-small">
        <div className="top-bar-left">
          <h1 className="app-name">BrainyAxe</h1>
        </div>
        <div className="top-bar-right">
          <ul className="menu top-bar-menu">
            <li>
              <IndexLink to="/" className="link" activeClassName="active">Tunings</IndexLink>
            </li>
            <li>
              <Link to="/scales" className="link" activeClassName="active">Scales</Link>
            </li>
            <li>
              <Link to="/chords" className="link" activeClassName="active">Chords</Link>
            </li>
            <li>
              <Link to="/settings" className="link" activeClassName="active">Settings</Link>
            </li>
            <li>
              <Link to="/about" className="link" activeClassName="active">About</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Toolbar
