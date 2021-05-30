import React , {useState} from 'react';
/* import uuid from 'uuid/v1'; */


const SongList = () => {

    const [songs, setSongs] = useState([
        {id:1 , title:'Song1'},
        {id:2 , title:'Song2'},
        {id:3 , title:'Song3'}
    ])

    const addSong = () => {
        setSongs([...songs,
        {id: Math.random() , title:'new Song'}])
    }

    return (
        <div className="song-list">
            <ul>{
                songs.map( song => {
                return( 
                    <div>
                        <li key={song.id} >{song.title}</li>
                    </div>
                    )
                })}
            </ul>
            <button onClick={addSong}>Add</button>
        </div>
    );
}
 
export default SongList;