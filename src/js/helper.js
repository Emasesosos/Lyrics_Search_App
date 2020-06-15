const showData = (dataInfo) => {

        // const { data } = dataInfo;
        // let outPut = '';
        // data.forEach((song) => {
        //     outPut += `
        //     <li>
        //         <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        //         <button 
        //             class="btn" 
        //             data-artist="${song.artist.name}"
        //             data-songtitle="${song.title}"
        //         >
        //             Get Lyrics
        //         </button>
        //     </li>
        // `;
        // });

        // return outPut;

        const { data } = dataInfo;

        let artistSong = `
            <ul class="songs">
                ${
                    data.map((song) => {
                        return `
                            <li>
                                <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                                <button 
                                    class="btn" 
                                    data-artist="${song.artist.name}"
                                    data-songtitle="${song.title}"
                                >
                                    Get Lyrics
                                </button>
                            </li>
                        `;
                    }).join('')
                }
            </ul>
    `;

    return artistSong;

};

export { showData }