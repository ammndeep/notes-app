import React from 'react'
import Notes from './Notes'

const NoteContainer = (props) => {

  const reverseArray = (arr) => {
    const array = []

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i])
    }
    return array
  }

  const notes = reverseArray(props.notes)
  return (
    <div className='h-screen pb-12'>
      <div className=' flex flex-wrap gap-5 overflow-y-scroll h-[90%] pl-5'>
        {
          notes?.length > 0 ? (
            notes.map((item) => 
              <Notes note={item} key={item.id}
              deleteNote={props.deleteNote}
              updateText={props.updateText} />)
            ) : (
            <h2 className='text-4xl my-20 px-20'>No Notes Present📝</h2>
          )}

      </div>
    </div>
  );
};

export default NoteContainer
