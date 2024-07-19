function make_album(artist, title, track) {
    var album = {
        artist: artist,
        title: title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("Artist 1", "title 1");
console.log(album1);
var album2 = make_album("Artist 2", "title 2");
console.log(album2);
var album3 = make_album("Artist 3", "title 3", 3);
console.log(album3);
