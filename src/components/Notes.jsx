import React from 'react'
import deleteIcon from '../assets/delete.png';
let timer = 500, timeout;

const Notes = (props) => {
  const formatDate = (value) => {

    if (!value) return "";

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date(value);

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    hrs = hrs > 12 ? hrs - 12 : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm}  ${day},${month}`

  }


  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  }

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  }

  return (
    <div className='p-6 h-64 w-64 flex flex-col rounded-xl' style={{ backgroundColor: props.note.color }}>
      <textarea className='flex-1 outline-none resize-none bg-transparent leading-5 text-base '
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)} />

      <div className='flex justify-between items-end'>
        <p>{formatDate(props.note.time)}</p>
        <img className="w-[25px] cursor-pointer max-w-[25px]"
          src={deleteIcon}
          onClick={() => props.deleteNote(props.note.id)} alt="delete" />
      </div>


    </div>
  )
}

export default Notes
