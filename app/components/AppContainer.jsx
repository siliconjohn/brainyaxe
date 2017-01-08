import React from 'react'
import FretboardContainer from 'FretboardContainer'
import Toolbar from 'Toolbar'

export class AppContainer extends React.Component{

  componentDidMount() {
    $( document ).foundation()
  }

  render() {
    return (
      <div>
        <Toolbar/>
        {this.props.children}
        <FretboardContainer/>
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.object
}

module.exports = AppContainer
