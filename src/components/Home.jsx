import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar';
import NoteContainer from './NoteContainer';

const Home = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  const addNote = (color) => {
    const tempNotes = [...notes]

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    })
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes]

    const index = tempNotes.findIndex((item) => item.id === id)
    console.log(id, index, tempNotes);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  }

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes])

  const updateText = (text,id)=>{
    const tempNotes = [...notes]

    const index = tempNotes.findIndex((item) => item.id === id)
    console.log(id, index, tempNotes);
    if (index < 0) return;

    tempNotes[index].text= text;
    setNotes(tempNotes);
  }  


  return (
    <div className='flex pl-14 mt-6 gap-8' >
      <SideBar addNote={addNote} />
      <NoteContainer notes={notes} 
      deleteNote={deleteNote}
      updateText={updateText} />
    </div>


  )
};

export default Home
