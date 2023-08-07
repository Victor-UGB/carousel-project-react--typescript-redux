import React, {useState} from 'react'
import {AiOutlineHeart, AiFillHeart} from"react-icons/ai"
import {PiChatTeardrop, PiShareFatLight} from 'react-icons/pi'
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs'

interface Props {
    like: boolean,
    share: boolean,
    comment: boolean,
    bookmark: boolean,
    act: string,
    handleAction : (action: string) => void
}

const Actions:React.FC<Props> = ({...Props}) => {

    const [actions, setActions] = useState({
        like : false,
        comment : false,
        share: false,
        bookmark: false
    })

    const handleAct = (action:string) => {
        if (action === "like") {
            console.log(`${action} called`)
            setActions({...actions, like:!actions.like})
        }else if(action === "bookmark"){
            console.log(`${action} called`)
            setActions({...actions, bookmark:!actions.bookmark})
        }
        else if(action === "comment"){
            console.log(`${action} called`)
            setActions({...actions, comment:!actions.comment})
        }
        else{
            console.log(`${action} called`)
            setActions({...actions, share:!actions.share})
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
                    <div onClick={() => Props.handleAction(Props.act)}>
                        <PiChatTeardrop className='h-8 w-8 mx-1'/>
                    </div>
                    <div>
                        <PiShareFatLight className='h-8 w-8 mx-1'/>
                    </div>
                </div>
                <div>
                    <div onClick={() => handleAct("bookmark")}>
                        {actions.bookmark? <BsBookmarkFill className='animate-pin-down h-6 w-6 mx-1'/>: <BsBookmark className='h-7 w-7 mx-1'/>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Actions