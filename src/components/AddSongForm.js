import React, {useState} from 'react';

const AddSongForm = ( {addSong}) => {

    const [title, setTitle] = useState('')
    console.log('title :>> ', title);

   const handleSubmit = (e) => {
    console.log('tit;e ', title);
    e.preventDefault()    
    addSong(title)
    setTitle('')
   }


    return (
        <form onSubmit={handleSubmit}>
            <label >Song Name</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <button >add</button>
        </form>
    );
}
 
export default AddSongForm;