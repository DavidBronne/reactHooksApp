import React , {useState} from 'react';
/* import uuid from 'uuid/v1'; */
import AddSongForm from './AddSongForm'


const SongList = () => {

    const [songs, setSongs] = useState([
        {id:1 , title:'Song1'},
        {id:2 , title:'Song2'},
        {id:3 , title:'Song3'}
    ])

    const addSong = (song) => {
        setSongs([...songs,
        {id: Math.random() , title:song}])  
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
            <AddSongForm addSong={addSong}/>
        </div>
    );
}
 
export default SongList;