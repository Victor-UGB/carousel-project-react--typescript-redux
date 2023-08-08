import React, {useState, useEffect} from 'react'
import FeedTitle from './FeedTitle'
import Carousel from './Carousel'
import FeedDetails from './FeedDetails'
import Actions from './Actions'
import {FeedProvider, FeedData, useData} from '../FeedContext'

interface Props {
    feed: any
}

const Feed:React.FC<Props> = (feed) => {
    const [mediaFeeds, setMediaFeeds] = useState<any>([
        {
            mediaSrc: "https://images.unsplash.com/photo-1690953283588-4a72c032c9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
            mediaSrc: "https://images.unsplash.com/photo-1690914258086-f62d17ea0a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        {
            mediaSrc: "https://plus.unsplash.com/premium_photo-1673548917471-3102c4970b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        {
            mediaSrc: "https://images.unsplash.com/photo-1690913937190-dde617288864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
    ])

    const [profileImg, setProfileImg] = useState('https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60')

    const [feedDetails, setFeedDetails] = useState<FeedData>(feed.feed)
    
    const setContextValue = () => {
        try {
            const value = feedDetails

        
        }
        catch (error){
            console.error('Error:', error)
        }
    }

    // On component mount set feed property value to FeedContext
    useEffect(() => {
        setFeedDetails(feed.feed)
    }, [])
    

    return (
        <FeedProvider initialValue={feedDetails}>
        <div>
            <div className='text-zinc-400 font-medium my-2 sm:w-1/2 m-auto'>
                <div className="p-2">
                    <FeedTitle
                        profileImg={feed.feed.profileImg}
                        username = { feed.feed.username }
                    />
                </div>
                <Carousel 
                    feeds={feed.feed.mediaFeeds}
                />
                <div className='p-2'>
                <Actions
                    like= {false}
                    comment = {false}
                    share = {false}
                    bookmark = {false}
                    handleAction={() => console.log("hey")}
                    act='like'
                />
                <FeedDetails
                    feedDetails={feed.feed.feedDetails}
                />
                </div>
            </div>
        </div>
        </FeedProvider>
    )
}

export default Feed