var initialState = {
    scales: [
      { name: 'No Scale', degrees: '', intervals:[], key:"scale0"},
      { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale1"},
      { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"scale2"},
      { name: 'Natural Minor', degrees: '1,2,♭3,4,5,♭6,♭7', intervals:[2,3,5,7,8,10], key:"scale3"},
      { name: 'Harmonic Minor', degrees: '1,2,♭3,4,5,♭6,7', intervals:[2,3,5,7,8,11], key:"scale4"},
      { name: 'Melodic Minor', degrees: '1,2,♭3,4,5,6,7', intervals:[2,3,5,7,9,11], key:"scale5"},
      { name: 'Ionian (Major)', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale6"},
      { name: 'Dorian', degrees: '1,2,♭3,4,5,6,♭7', intervals:[2,3,5,7,9,10], key:"scale7"},
      { name: 'Phrygian', degrees: '1,♭2,♭3,4,5,♭6,♭7', intervals:[1,3,5,7,8,10], key:"scale8"},
      { name: 'Lydian', degrees: '1,2,3,♯4,5,6,7', intervals:[2,4,6,7,9,11], key:"scale9"},
      { name: 'Mixolydian', degrees: '1,2,3,4,5,6,♭7', intervals:[2,4,5,7,9,10], key:"scale10"},
      { name: 'Aeolian (Natural Minor)', degrees: '1,2,♭3,4,5,♭6,♭7', intervals:[2,3,5,7,8,10], key:"scale11"},
      { name: 'Locrian', degrees: '1,♭2,♭3,4,♭5,♭6,♭7', intervals:[1,3,5,6,8,10], key:"scale12"}
    ],
    tunings: [
      { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[40,45,50,55,59,64], key:"d"},
      { name: 'Drop D', notes:'D,A,D,G,B,E', midiNotes:[38,45,50,55,59,64], key:"dd"}
    ],
    chords: [
      { name: 'No Chord', degrees: '', intervals:[], key:"chord0"},
      { name: 'Major', degrees: 'R,3,5', intervals:[4,7], key:"chord1"},
      { name: 'Minor', degrees: 'R,♭3,5', intervals:[3,7], key:"chord2"},
      { name: 'Augmented', degrees: 'R,3,♯5', intervals:[4,8], key:"chord3"},
      { name: 'Diminished', degrees: 'R,♭3,♭5', intervals:[3,6], key:"chord4"},
      { name: 'Major 7th', degrees: 'R,3,5,7', intervals:[4,7,11], key:"chord5"},
      { name: 'Minor 7th', degrees: 'R,♭3,5,♭7', intervals:[3,7,10], key:"chord6"},
      { name: 'Dominant 7th', degrees: 'R,3,5,♭7', intervals:[4,7,10], key:"chord7"},
      { name: 'Augmented 7th', degrees: 'R,3,♯5,♭7', intervals:[4,8,10], key:"chord8"},
      { name: 'Half Diminished 7th', degrees: 'R,♭3,♭5,♭7', intervals:[3,6,10], key:"chord9"},
      { name: 'Diminished 7th', degrees: 'R,♭3,♭5,♭♭7', intervals:[3,6,9], key:"chord10"},
      { name: 'Min/Maj 7th', degrees: 'R,♭3,5,7', intervals:[3,7,11], key:"chord11"},
      { name: 'Major 9th', degrees: 'R,3,5,7,9', intervals:[4,7,11,14], key:"chord12"},
      { name: 'Minor 9th', degrees: 'R,♭3,5,♭7,9', intervals:[3,7,10,14], key:"chord13"},
      { name: 'Dominant 9th', degrees: 'R,3,5,♭7,9', intervals:[4,7,10,14], key:"chord14"},
      { name: 'Major 6/9th', degrees: 'R,3,5,6,9', intervals:[4,7,9,14], key:"chord15"},
      { name: 'Minor 6/9th', degrees: 'R,♭3,5,6,9', intervals:[3,7,9,14], key:"chord16"},
      { name: 'Major 11th', degrees: 'R,3,5,7,9,11', intervals:[4,7,11,14,17], key:"chord17"},
      { name: 'Minor 11th', degrees: 'R,♭3,5,♭7,9,11', intervals:[3,7,10,14,17], key:"chord18"},
      { name: 'Dominant 11th', degrees: 'R,3,5,♭7,9,11', intervals:[4,7,10,14,17], key:"chord19"},
      { name: 'Major 13th', degrees: 'R,3,5,7,9,11,13', intervals:[4,7,11,14,17,21], key:"chord20"},
      { name: 'Minor 13th', degrees: 'R,♭3,5,♭7,9,11,13', intervals:[3,7,10,14,17,21], key:"chord21"},
      { name: 'Dominant 13th', degrees: 'R,3,5,♭7,9,11,13', intervals:[4,7,10,14,17,21], key:"chord22"}
    ],
    selectedTuningKey: "d",
    selectedScaleKey: "scale0",
    selectedScaleNote: "E",
    selectedChordKey: "chord0",
    selectedChordNote: "D",
    numberOfNotesOnFretboard: 25,
    selectedNotesForScale: [],
    selectedNotesForChord: []
  }

module.exports.getInitialState = function () {
  var result = initialState;
  result.selectedTuning= { name: 'Standard', notes:'E,A,D,G,B,E', midiNotes:[40,45,50,55,59,64], key:"d"};
  return result;
}
