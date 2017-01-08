import React from 'react'
import { connect } from 'react-redux'
import CustomTuningButtons from 'CustomTuningButtons'
import CustomTuningNoteChooser from 'CustomTuningNoteChooser'

export class CustomTuningContainer extends React.Component{

  render(){
    var num = this.props.numberOfCustomTuningStrings

    return (
      <div>
        <div className="text-center smaller-font"><strong>Custom Tuning</strong></div>
        <br></br>
        <div className="row">
          <div className="column small-centered large-12 medium-12 small-12 smaller-font">
            Strings {num} to 1, the lowest is first and the highest is last
              <CustomTuningButtons/>
          </div>
        </div>
        {
          Array.from( new Array(num) ).map(( _, i ) => {
            return (
              <CustomTuningNoteChooser key={ i } stringNumber={ i }/>
            )
          }).reverse()
        }
      </div>
    )
  }
}

CustomTuningContainer.propTypes = {
  numberOfCustomTuningStrings: React.PropTypes.number.isRequired,
}

export default connect(( state ) => {
  return {
    numberOfCustomTuningStrings: state.numberOfCustomTuningStrings
  }
})( CustomTuningContainer )
