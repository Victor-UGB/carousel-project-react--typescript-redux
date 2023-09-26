import React from 'react'

interface Props{
    feedTitle: string;
    feedProfilePic: string;
    feedDetailCaption: string;
    closeCommentModalCallback: () => void
}

const CommentModal:React.FC<Props> = ({...Props}) => {
  return (
    <div className='h-full w-full top-0 absolute'>
        <div className='flex justify-between p-3 py-5 text-xs font-bold'>
            <button
                className='px-4 py-1 rounded-full bg-zinc-400'
                onClick={Props.closeCommentModalCallback}
            >
                Close
            </button>
            <button
                className='px-4 py-1 rounded-full bg-blue-600'
                >
                Post
            </button>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='pl-3 flex gap-2 items-center'>
                <div className='h-8 w-8 relative rounded-full'>
                    <img src={Props.feedProfilePic} alt=''
                        className='h-full w-full object-cover rounded-full'/>
                </div>
            </div>
            <div className='text-xs text-left'>
                <div className='text-xs font-bold'>{Props.feedTitle}</div>
                <div>{Props.feedDetailCaption}</div>
            </div>
        </div>
        <div className='p-3 w-full'>
            <form className='w-full'>
                <textarea className='w-full rounded-xl bg-zinc-700 font-semibold p-2 text-sm' placeholder='Post your comment'/>
                
            </form>
        </div>
    </div>
  )
}

export default CommentModal