// Create a Song constructor that sets a name and duration.
// Create a Playlist constructor that starts out as empty.
// Make the interface allow songs to be added to a Playlist.
// Make the interface show the current song. It should default to the first song in the list.
// Make the interface allow you to skip songs.
// Make the interface allow you to remove songs from the playlist.

var Song = require('../song.js');
var Playlist = require('../playlist.js')


describe("Song", function(){

  it("has a Song constructor that sets a name", function(){
    var song = new Song("Stairway To Heaven", 3.45);
    expect(song.name).toEqual("Stairway To Heaven");
  })

  it("has a Song constructor that sets a duration", function(){
    var song = new Song("Stairway To Heaven", 3.45);
    expect(song.duration).toEqual(3.45);
  })

})

describe("Playlist", function(){

  it("has a Playlist constructor that starts out as empty", function(){
    var playlist = new Playlist()
    expect(playlist.empty).toEqual(true);
  })

  it("allows songs to be added to a Playlist", function(){
    var song = new Song("Stairway To Heaven", 3.45);
    var playlist = new Playlist();
    playlist.add(song);
    expect(playlist.contents).toEqual([song]);
  })

  it("shows the current song. It should default to the first song in the list", function(){
    var song = new Song("Stairway To Heaven", 3.45);
    var song2 = new Song("Thunderstruck", 2.30)
    var playlist = new Playlist();
    playlist.add(song);
    playlist.add(song2);
    expect(playlist.current).toEqual({name: "Stairway To Heaven", duration: 3.45});
  })

  it("allows you to skip songs", function(){
    var song = new Song("Stairway To Heaven", 3.45);
    var song2 = new Song("Thunderstruck", 2.30)
    var playlist = new Playlist();
    playlist.add(song);
    playlist.add(song2);
    playlist.skip();
    expect(song.current).toEqual({name: "Thunderstruck", duration: 2.30});
  })

  it("allows you to remove songs from the playlist", function(){
    var song = new Song("Stairway To Heaven", 3.45);
    var song2 = new Song("Thunderstruck", 2.30)
    var playlist = new Playlist();
    playlist.add(song);
    playlist.add(song2);
    playlist.remove(song2);
    expect(song.contents).toEqual({name: "Stairway To Heaven", duration: 3.45});
  })


})