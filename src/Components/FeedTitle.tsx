import React from 'react'
import {MdOutlineMoreVert} from "react-icons/md"

interface Props {
  profileImg: string,
  username: string
}

const FeedTitle:React.FC<Props>
  = ({profileImg, username}) => {
    return (
      <div>
        <div className='flex justify-between text-sm text-zinc-200 items-center'>
          <div className='flex items-center gap-2'>
            <div className=' h-8 w-8 rounded-full bg-zinc-200'><img src={profileImg} alt='' className='h-full w-full rounded-full'/></div>
            <div>{username}</div>
          </div>
          <div><MdOutlineMoreVert className='h-8 w-8'/></div>
        </div>
      </div>
    )
  }

export default FeedTitle
