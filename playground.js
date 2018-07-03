// write a function to retrieve blob of json
// make an ajax request! Use the 'fetch' function

const fetchAlbums = async () => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json();
    console.log(json);
}

fetchAlbums();