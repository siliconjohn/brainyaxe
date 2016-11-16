var expect = require('expect')
var utils = require('utils')

describe( "Utils", () => {

  describe( 'noteNamesTable', () => {

    it( "Should have 132 notes", () => {
      expect( utils.noteNamesTable.length ).toEqual( 132 )
    })
  })

  describe( 'twelveNotesTable', () => {

    it( "Should have 12 notes", () => {
      expect( utils.twelveNotesTable.length ).toEqual( 12 )
    })
  })

  describe( 'getNoteNameFromMIDINumber', () => {

    it( "Should get middle C", () => {
      expect( utils.getNoteNameFromMIDINumber( 60 )).toEqual( "C" )
    })

    it( "Should get first C", () => {
      expect( utils.getNoteNameFromMIDINumber( 0 )).toEqual( "C" )
    })

    it( "Should get last B", () => {
      expect( utils.getNoteNameFromMIDINumber( 132 )).toEqual( "B" )
    })

    it( "Should get first C from a negative number", () => {
      expect( utils.getNoteNameFromMIDINumber( -1 )).toEqual( "C" )
    })

    it( "Should get last B from a large number", () => {
      expect( utils.getNoteNameFromMIDINumber( 199 )).toEqual( "B" )
    })
  })

  describe( 'getObjectForKey', () => {

    it( "Should return major chord", () => {
      var testArray = [
          { name: 'No Chord', degrees: '', intervals:[], key:"default"},
          { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
          { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"}
        ]

      var result = utils.getObjectForKey( testArray, "chord1" )
      expect( result.name ).toEqual( "Major" )
    })

    it( "Should return undefined if key does not exist", () => {
      var testArray = [
          { name: 'No Chord', degrees: '', intervals:[], key:"default"},
          { name: 'Major', degrees: '1,3,5', intervals:[4,7], key:"chord1"},
          { name: 'Minor', degrees: '1,♭3,5', intervals:[3,7], key:"chord2"}
        ]

      var result = utils.getObjectForKey( testArray, "chordX" )
      expect( result ).toBe( undefined )
    })
  })

  describe( 'isNoteInArray', () => {

    it( "Should return C", () => {
      var result = utils.isNoteInArray( 60, ['F','C','D'] )
      expect( result ).toEqual( 'C' )
    })

    it( "Should return undefined", () => {
      var result = utils.isNoteInArray( 61, ['F','C','D'] )
      expect( result ).toBe( undefined )
    })

    it( "Should also return undefined", () => {
      var result = utils.isNoteInArray( -1, ['F','C','D'] )
      expect( result ).toBe( undefined )
    })

    it( "Should return undefined too", () => {
      var result = utils.isNoteInArray(999, ['F','C','D'] )
      expect( result ).toBe( undefined )
    })
  })

  describe( 'getNotesForArray', () => {

    it( "Should return C major scale", () => {
      var testArray = [
        { name: 'No Scale', degrees: '', intervals:[], key:"default"},
        { name: 'Major', degrees: '1,2,3,4,5,6,7', intervals:[2,4,5,7,9,11], key:"scale1"},
        { name: 'Blues', degrees: '1,♭3,4,5,♭7', intervals:[3,5,7,10], key:"scale2"}
      ]
      var result = utils.getNotesForArray( testArray[1], "C" )
      expect( result[0] ).toBe( 'C' )
      expect( result[1] ).toBe( 'D' )
      expect( result[2] ).toBe( 'E' )
      expect( result[3] ).toBe( 'F' )
      expect( result[4] ).toBe( 'G' )
      expect( result[5] ).toBe( 'A' )
      expect( result[6] ).toBe( 'B' )
    })
  })
})
