var React = require('react')

var About = ( props ) => {

  return (
    <div className="main-menu">
      <div className="row">
        <div className="column small-centered large-8 medium-10 small-10">
          <div className="row title-bar shadow">
            About
          </div>
          <div className="row menu-section shadow">
            <div className="columns small-12">
              <div className="media-object">
                <div className="media-object-section">
                  <div className="thumbnail">
                    <img src= "images/john.jpg"/>
                  </div>
                </div>
                <div className="media-object-section main-section">
                  Created by John Doerfler 
                  <p className="black">A react and redux app.
                   Checkout the code at <a href="http://github.com/siliconjohn/brainyaxe">GitHub</a></p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = About
