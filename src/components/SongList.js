import React , {useState, useEffect} from 'react';
/* import uuid from 'uuid/v1'; */
import AddSongForm from './AddSongForm'


const SongList = () => {

    const [songs, setSongs] = useState([
        {id:1 , title:'Song1'},
        {id:2 , title:'Song2'},
        {id:3 , title:'Song3'}
    ])

    const [age, setAge] = useState (20)

    const addSong = (song) => {
        setSongs([...songs,
        {id: Math.random() , title:song}])  
    }

    useEffect(() => {
        console.log('songs : useEffect ran');
        
    }, [songs])
    useEffect(() => {
        console.log('age :useEffect ran');
        
    }, [age])

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
            <button onClick={()=> setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}
 
export default SongList;