var React = require('react')
var { Link, IndexLink } = require('react-router')

var Toolbar = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <Link to="/"><h1><strong>BrainyAxe</strong></h1></Link>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Tunings</IndexLink>
            </li>
            <li>
              <Link to="/scales" activeClassName="active"  activeStyle={{ fontWeight: 'bold' }}>Scales</Link>
            </li>
            <li>
              <Link to="/chords" activeClassName="active"  activeStyle={{ fontWeight: 'bold' }}>Chords</Link>
            </li>
            <li>
              <Link to="/settings" activeClassName="active"  activeStyle={{ fontWeight: 'bold' }}>Settings</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{ fontWeight: 'bold' }}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Toolbar
