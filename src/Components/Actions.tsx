import React, {useEffect, useState} from 'react'
import {AiOutlineHeart, AiFillHeart} from"react-icons/ai"
import {PiChatTeardrop, PiShareFatLight} from 'react-icons/pi'
import {BsBookmark, BsBookmarkFill, BsSend} from 'react-icons/bs'
import {useData} from '../FeedContext'

interface Props {
    like: boolean,
    share: boolean,
    comment: boolean,
    bookmark: boolean,
    act: string,
    handleAction : (action: string) => void;
    shareModalCallback: () => void;
    commentModalCallback: () => void
}

const Actions:React.FC<Props> = ({...Props}) => {

    const [actions, setActions] = useState({
        like : false,
        comment : false,
        share: false,
        bookmark: false
    })

    const {data, setData } = useData()

    const handleLike = () => {
        console.log(data.feedDetails)
        // const updatedData = {...data, likes: data.feedDetails.likes + 1}
        const updatedData = {...data.feedDetails, likes: !actions.like? data.feedDetails.likes + 1: data.feedDetails.likes - 1}
        setData((prevData) =>  {
            prevData.feedDetails= updatedData
            return prevData
        })
        // console.log(data)
        console.log(updatedData)
    }

    const handleAct = (action:string) => {
        if (action === "like") {
            console.log(`${action} called`)
            setActions({...actions, like:!actions.like})
            handleLike()
        }else if(action === "bookmark"){
            console.log(`${action} called`)
            setActions({...actions, bookmark:!actions.bookmark})
        }
        else if(action === "comment"){
            console.log(`${action} called`)
            setActions({...actions, comment:!actions.comment})
            Props.commentModalCallback()
        }
        else{
            console.log(`${action} called`)
            setActions({...actions, share:!actions.share})
            Props.shareModalCallback()

        }
        Props.handleAction("hey")
    }
    
    return (
        <div>
            <div className='flex justify-between text-zinc-200 my-2'>
                <div className='flex text-lg'>
                    <div onClick={() => handleAct("like")}>
                        { actions.like? <AiFillHeart className='animate-scale-up-down h-8 w-8 mx-1 text-red-600'/>: <AiOutlineHeart className='h-8 w-8 mx-1'/>}
                        
                    </div>
                    <div onClick={() => handleAct("comment")}>
                        <PiChatTeardrop className='h-8 w-8 mx-1'/>
                    </div>
                    <div onClick={() => handleAct("share")}>
                        <BsSend className='h-7 w-7 mx-1'/>
                    </div>
                </div>
                <div>
                    <div onClick={() => handleAct("bookmark")}>
                        {actions.bookmark? <BsBookmarkFill className='animate-pin-down h-6 w-6 mx-1'/>: <BsBookmark className='h-7 w-7 mx-1'/>}
                    </div>
                </div>
            </div>
            <div className='px-2 text-sm text-left font-medium py-1 pb-0 text-zinc-200'>{data.feedDetails['likes']} likes</div>
        </div>

    )
}

export default Actions