"use strict";
function make_album(aname, atitle, track) {
    const album = {
        Album_Name: aname,
        Album_Title: atitle,
        Track: track
    };
    return album;
}
;
let album1 = make_album("life", "hardwork", 10);
let album2 = make_album("king", "lion", 20);
let album3 = make_album("live", "hones", 30);
console.log(album1);
console.log(album2);
console.log(album3);
