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
                                ${data.prev ? `<button 
                                                class="btn" 
                                                onclick=getMoreSongs('${data.prev}')
                                                >
                                                    Prev
                                                </button>` : ''}
                                ${data.next ? `<button 
                                                class="btn" 
                                                onclick=getMoreSongs('${data.next}')
                                                >
                                                    Next
                                                </button>` : ''}
                            `;
            } else {
                more.innerHTML = '';
            }
        }
    });

};

window.getMoreSongs = async(url) => {
    console.log('getMoreSongs');
};
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