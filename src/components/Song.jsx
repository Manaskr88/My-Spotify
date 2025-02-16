import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Song = ({name , image , id, desc}) => {
  const {playId} = useContext(PlayerContext)
  return (
    <div onClick={()=>playId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

     <img src={image} className='rounded-xl' />
     <p className='font-bold mt-2 mb-1'>{name}</p>
     <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default Song
