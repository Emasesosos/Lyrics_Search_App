console.log('searchSongs');
const apiURL = 'https://api.lyrics.ovh';

/* ************************************************************ */
const searchSongs = async(term) => {

    try {

        const resp = await fetch(`${apiURL}/suggest/${term}`);
        if (!resp.ok) throw 'No sé pudo realizar la petición';
        const data = await resp.json();

        return data;

    } catch (err) {

        throw err;

    }

}

/* ************************************************************ */
const searchSongsChange = async(term) => {

    try {

        const resp = await fetch(`${apiURL}/suggest/${term}`);
        if (!resp.ok) throw 'No sé pudo realizar la petición';
        const data = await resp.json();

        return data;

    } catch (err) {

        throw err;

    }

}

/* ************************************************************ */

export {
    searchSongs,
    searchSongsChange
}