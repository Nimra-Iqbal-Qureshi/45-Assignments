function make_album(artist:string,title:string,track?:number) {
    
    let album:{artist:string,title:string,track?:number}={
        artist:artist,
        title:title

    }
    if (track !== undefined){
        album.track=track
    }
    return album;

}
let album1=make_album("Artist 1","title 1");
console.log(album1);
let album2=make_album("Artist 2","title 2");
console.log(album2);
let album3=make_album("Artist 3","title 3", 3);
console.log(album3);

