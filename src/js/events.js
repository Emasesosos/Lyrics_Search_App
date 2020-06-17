import { searchSongs, searchSongsChange } from './http-provider';
import { showData } from './helper';
/* ************************************************************ */
const submit = (form, search, result, more) => {

        form.addEventListener('submit', async(e) => {

                    e.preventDefault();
                    const searchTerm = search.value.trim();

                    if (!searchTerm) {

                        alert('Please trype in a search term');

                    } else {

                        const data = await searchSongs(searchTerm);
                        const artistSong = showData(data);
                        result.innerHTML = artistSong;
                    
                        if (data.prev || data.next) {

                            more.innerHTML = `
                                ${
                                    data.next 
                                        ? `<button class="btn" onclick="getMoreSongs('${data.next}')">
                                                Next
                                            </button>` 
                                        : '' 
                                } 
                                ${
                                    data.prev
                                        ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">
                                                Prev
                                            </button>` 
                                        : '' 
                                } 
                            `;

                        } else {

                            more.innerHTML = '';

                        }
                    }
    });

};
// Get Prev and Next Songs 
window.getMoreSongs = async(url) => {
    // console.log('getMoreSongs: ', url);
    try {

        const resp = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
        // const resp = await fetch(url);
        if(!resp.ok) throw 'No se pueddo realizar la petición';  
        const data = await resp.json();
        const artistSong = showData(data);
        result.innerHTML = artistSong;

        if (data.prev || data.next) {
        
            more.innerHTML = `
                ${
                    data.prev
                        ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">
                                Prev
                            </button>` 
                        : '' 
                } 
                ${
                    data.next 
                        ? `<button class="btn" onclick="getMoreSongs('${data.next}')">
                                Next
                            </button>` 
                        : '' 
                } 
            `;

        } else {

            more.innerHTML = '';

        }

    } catch(err) {

        throw err;

    }
};
// Get Lyrics for song
const getLyrics = async(artist, songTitle) => {

    const apiURL = 'https://api.lyrics.ovh';
    try {
        const resp = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
        if(!resp.ok) throw 'No se pudo realizar la petición';
        const data = await resp.json();
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        result.innerHTML = `
            <h2><strong>${artist}</strong> - ${songTitle}</h2>
            <span>${lyrics}</span>
        `;
        more.innerHTML = '';
    } catch (err) {
        throw err;
    }

};
// Get Lyrics button Click
result.addEventListener('click', (e) => {
    const clickedEl = e.target;
    if (clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');
        getLyrics(artist, songTitle);
    }
});
/* ************************************************************ */
const change = (search) => {
    search.addEventListener('input', async(e) => {
        e.preventDefault();
        let searchTermChange = e.target.value;
        if (searchTermChange) {
            const data = await searchSongsChange(searchTermChange);
            const artistSong = showData(data);
            result.innerHTML = artistSong;
        }
    });
};
/* ************************************************************ */
export {
    submit,
    change
}