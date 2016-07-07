const notesNameTable = ["C","C♯/D♭","D","D♯/E♭","E","F","F♯/G♭","G","G♯/A♭","A","A♯/B♭","B","C",
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

module.exports.getNoteNameFromMIDINumber = function( number ) {
  if (number < 0 ) {
    return notesNameTable[0];
  }
  if( number >= notesNameTable.length) {
    return notesNameTable[notesNameTable.length - 1];
  }
  return notesNameTable[number];
}

// This was used to generate the notes table, saving incase it
// needs to be changed
// var scale = new Array(11);
//
// scale[0] = 'C';
// scale[1] = 'C♯/D♭';
// scale[2] = 'D';
// scale[3] = 'D♯/E♭';
// scale[4] = 'E';
// scale[5] = 'F';
// scale[6] = 'F♯/G♭';
// scale[7] = 'G';
// scale[8] = 'G♯/A♭';
// scale[9] = 'A';
// scale[10] = 'A♯/B♭';
// scale[11] = 'B';
//
// table = [];
//
// for(var i=0; i< 11; i++) {
//   table= table.concat(scale);
// }
//
// console.log(table.toString());
