// Create a Song constructor that sets a name and duration.
// Create a Playlist constructor that starts out as empty.
// Make the interface allow songs to be added to a Playlist.
// Make the interface show the current song. It should default to the first song in the list.
// Make the interface allow you to skip songs.
// Make the interface allow you to remove songs from the playlist.
function Playlist(){
  this.contents = [];
  this.empty = true;
}

Playlist.prototype.add = function(song){

  this.empty = false;
  this.contents.push(song);
}


module.exports = Playlist;