export const notesNameTable = ["C","C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
                        "C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B"];

export const twelveNotesTable = ["C","C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B"];

module.exports.getNoteNameFromMIDINumber = function( number ) {
  if (number < 0 ) return notesNameTable[0];
  if( number >= notesNameTable.length) return notesNameTable[notesNameTable.length - 1];

  return notesNameTable[number];
}

module.exports.getObjectForKey = function( array, key ) {
  try {
    return array.find(function( object ) {
      return object.key === key ? true : false
    },this);
  } catch (e) {
    return undefined
  }
}

module.exports.isNoteInArray = function( midiNumber, noteArray ) {
  if (midiNumber < 0  || midiNumber >= notesNameTable.length ) return false;

  var noteName = notesNameTable[midiNumber];

  return noteArray.find(function(midiNote){
    return midiNote === noteName  ? true : false;
  })
}

module.exports.getNotesForArray = function( scale, startNoteName ) {
  if(scale.intervals.length == 0) return [];

  var result = [];

  // find first instance of start note in array
  var rootMidiNote;
  notesNameTable.find(function( name, index ) {
    if( name === startNoteName) {
      rootMidiNote = index;
      return true;
    } else
      return false;
  },this);

  // if couln't find note return []
  if(rootMidiNote === undefined) return [];

  // push root note
  result.push(notesNameTable[rootMidiNote]);

  // push other notes in scale
  scale.intervals.forEach(function(item) {
    result.push(notesNameTable[rootMidiNote + item]);
  });

  return result;
}

module.exports.playMidiNote = function ( note ) {

  try {
    var synth = T( "OscGen", { wave:"saw", mul:1 })

    T( "interval", { interval:"L1", timeout:"1sec" }, function() {
      synth.noteOn( note, 40 )

    }).on( "ended", function() {
      this.stop();
    }).set({ buddies:synth }).start()
  } catch ( e ) {
    console.log("Timbre not loaded")
  }
}
