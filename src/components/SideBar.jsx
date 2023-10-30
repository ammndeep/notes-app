import React, { useState } from 'react'
import plusIcon from '../assets/plus.png';

const SideBar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#5ed192", "#b693fd", "#e4ee91"];

  const [listOpen,setListOpen] = useState(false);

  return (

    <div className='flex flex-col justify-start gap-4 '>
      <img src={plusIcon} alt="add" className='w-[50px] max-w-[50px] cursor-pointer' onClick={()=>setListOpen(!listOpen)}/>
      <ul className={`flex flex-col gap-3 items-center ${listOpen ? " ":" hidden"}`}>
        {
          colors.map((item, index) => (
            <li
              key={index}
              className='rounded-[50%] h-6 w-6 list-none cursor-pointer'
              style={{ backgroundColor: item }}
              onClick={()=>props.addNote(item)}
              />
          ))
        }
      </ul>
    </div>
  )
}

export default SideBar
