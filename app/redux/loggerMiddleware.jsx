import ReactGA from 'react-ga'

module.exports.logger = ({ getState }) => {

  return ( next ) => ( action ) => {

    // clone the action and delete the type, it's redundant
    var newAction = Object.assign( {}, action )
    delete newAction.type
 
    ReactGA.event({
      category: action.type,
      action: "Changed: " + JSON.stringify( newAction )
    })

    // call the next dispatch method in the middleware chain.
    let returnValue = next( action )

    return returnValue
  }
}
