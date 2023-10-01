import React, { useEffect, useState } from 'react'
import {useData} from '../FeedContext'

interface Props{
  feedDetails: any,
  commentModalCallback: () => void
}

const FeedDetails:React.FC<Props> = (feedDetails, commentModalCallback) => {

  const {data} = useData()
  const [likes, setlikes] = useState(data.feedDetails.likes)

  useEffect(() => {
    setlikes(data.feedDetails.likes)
    console.log(`calling from feedDetails ${data.feedDetails.likes}`)
  }, [data])

  const commentModalCall = () => {
    console.log("Comment called")
    console.log(typeof(commentModalCallback))
    // commentModalCallback()
  }

  return (
    <div>
      <div className='flex flex-col text-sm text-left mx-2'>
        {/* <div className='text-zinc-200 py-1'>
          {data.feedDetails.likes} likes
          {likes}
        </div> */}
        <div>
          <div className='text-zinc-200 font-bold'>{feedDetails.feedDetails.username}<span className='font-light'> {feedDetails.feedDetails.caption}</span></div>
          <div>more</div>
        </div>
        <div className='mt-1'
            onClick={() => commentModalCall()}>
          View all {data.feedDetails.commentCount} comments
        </div>
        <div className='text-xs'>2 DAYS AGO</div>
      </div>
    </div>
  )
}

export default FeedDetails