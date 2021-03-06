// all possible notes, the array index is the midi number
export const noteNamesTable = ["C","C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
  "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B"]

// array of all possible note names
export const twelveNotesTable = ["C","C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B"]

module.exports.getNoteNameFromMIDINumber = ( midiNoteNumber ) => {
  if ( midiNoteNumber < 0 )
    return noteNamesTable[0]

  if(  midiNoteNumber >= noteNamesTable.length)
    return noteNamesTable[noteNamesTable.length - 1]

  return noteNamesTable[ midiNoteNumber ]
}

module.exports.getObjectForKey = ( array, key ) => {
  return array.find(( object ) => {
    return object.key === key ? true : false
  }, this )
}

module.exports.getNoteInArray = ( midiNumber, noteArray ) => {
  if (midiNumber < 0 || midiNumber >= noteNamesTable.length )
    return undefined

  var noteName = noteNamesTable[ midiNumber ]

  return noteArray.find(( midiNote ) => {
    return midiNote === noteName  ? true : false
  })
}

module.exports.getNotesForArray = ( scale, startNoteName ) => {
  if( scale.intervals.length == 0 )
    return []

  var result = []

  // find first instance of start note in array
  var rootMidiNote
  noteNamesTable.find(( name, index ) => {
    if( name === startNoteName) {
      rootMidiNote = index
      return true
    } else
      return false
  }, this )

  // if couln't find note return []
  if( rootMidiNote === undefined )
    return []

  // push root note
  result.push( noteNamesTable[ rootMidiNote ])

  // push other notes in scale
  scale.intervals.forEach(( item ) => {
    result.push( noteNamesTable[ rootMidiNote + item ])
  })

  return result
}

module.exports.playMidiNote = ( midiNote ) => {
  try {
    var synth = T( "OscGen", { wave:"saw", mul:1 })

    T( "interval", { interval:"L1", timeout:"1sec" }, () => {
      synth.noteOn( midiNote, 20 )
    }).on( "ended", () => {
      synth.stop()
    }).set({ buddies:synth }).start()
  } catch ( e ) {
    console.log("Timbre not loaded")
  }
}

module.exports.ordinalSuffixOf = ( number ) => {
  var j = number % 10
  var k = number % 100
  if( j == 1 && k != 11 ) {
    return number + "st"
  }
  if( j == 2 && k != 12 ) {
    return number + "nd"
  }
  if( j == 3 && k != 13 ) {
    return number + "rd"
  }
  return number + "th"
}
