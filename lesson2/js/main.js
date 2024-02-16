
let artist = 'idk';
let album = 'uhhh';
let specialEdition = true;
let duration = 91;
let songs = ['titel1', 'titel2', 'titel3', 'titel4', 'titel5'];

//Log all the above variables in 1 log
console.log(artist, album, specialEdition, duration, songs);

if (specialEdition === true){
    console.log("dit album is heel speciaal");
}


if (duration <= 30){
    console.log('zeer kort album')
}
else if(duration <= 60){
    console.log('Gemiddeld album')
}
else if(duration <= 90){
    console.log('Waar voor je geld')
}
else if (duration > 90){
    console.log('Hmm dat is best extreem')
}


console.log(`Er staan ${songs.length} nummers op dit album`);
songs.push('titel 6');
songs[1] = 'WOW';
console.log(songs);

for (let song of songs) {
    console.log(song);
}



function addSong(title)
{
    songs.push(title);
}

addSong('Titel 7');
addSong('Titel 8');
console.log(songs);

