import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addComment } from '../Redux/actions'
import {v4 as uuidv4} from 'uuid'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useData } from '../FeedContext'



interface Props{
    id: number
    feedTitle: string;
    feedProfilePic: string;
    feedDetailCaption: string;
    closeCommentModalCallback: () => void
}

const CommentModal:React.FC<Props> = ({...Props}) => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const {data, setData} = useData()
    console.log(data)

    const handleOnSubmit = (event:any) => {
        console.log(text)
        // event.preventDefault()
        dispatch(addComment({text: text, id:uuidv4(), postId: Props.id}))
        setText("")
        const updatedData = {...data.feedDetails, commentCount: data.feedDetails.commentCount + 1}
        setData((prevData) => {
            prevData.feedDetails = updatedData
            return prevData
        })
    }
    const comments =useSelector((state:any) => state.comments.filter((x:any) => x.postId === Props.id))
    console.log(comments)


  return (
    <div className='h-full w-full top-0 absolute bg-zinc-900'>
        <div className='flex justify-between p-3 py-5 text-xs font-bold'>
            <button
                className='px-4 py-1 rounded-full bg-zinc-400'
                onClick={Props.closeCommentModalCallback}
            >
                Close
            </button>
            <button
                className='px-4 py-1 rounded-full bg-blue-600'
                onClick={() => handleOnSubmit("")}
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
                <textarea 
                onChange={(event) => setText(event.target.value)}
                value={text}
                className='w-full rounded-xl bg-zinc-700 font-semibold p-2 text-sm' placeholder='Post your comment'/>
                
            </form>
        </div>
        <div className='text-left text-sm font-extrabold text-zinc-400 px-6'>Comments</div>
        <div className='p-4 flex flex-col-reverse gap-2'>
            {comments.map((comment:any) => {
                return(
                <div className='text-left p-2 text-xs bg-zinc-800 rounded '>
                    <div className='px-2'>{comment.text}</div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default CommentModal