import React from 'react'
import { Link, IndexLink } from 'react-router'

export class Toolbar extends React.Component {

  render() {
    return (
      <div className="top-bar shadow-small">
        <div className="top-bar-left hide-for-small-only">
          <div className="app-name">BrainyAxe</div>
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
}

module.exports = Toolbar
