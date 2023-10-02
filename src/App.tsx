import React, {useState, useReducer, useContext} from 'react';
import {FeedProvider} from './FeedContext'
import './App.css';
import Feed from './Components/Feed';
import ShareModal from './Components/ShareModal';

function App() {

  const [feeds, setFeeds] = useState<any>([
    {
      id: 0,
      username: "victor_ugb",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
        { 
          mediaSrc: "https://images.unsplash.com/photo-1464069668014-99e9cd4abf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1690914258086-f62d17ea0a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        { 
          mediaSrc: "https://plus.unsplash.com/premium_photo-1673548917471-3102c4970b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
      ],
      feedDetails: {
        caption: "The life of a javascript developer",
        likes: 2200,
        username: "victor_ugb",
        commentCount: 21
      }
    },
    {
      id: 1,
      username: "ai_trainer",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
        { 
          mediaSrc: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1690913937190-dde617288864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        },
      ],
      feedDetails: {
        caption: "The life of an AI model trainer",
        likes: 1357,
        username: "ai_trainer",
        commentCount: 60
      } 
    },
    {
      id:2,
      username: "javas_firstborn",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
        { 
          mediaSrc: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1429279905410-894d3980828b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdhbGt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
      ],
      feedDetails: {
        caption: "The life of a java developer",
        likes: 3430,
        username: "javas_firstborn",
        commentCount: 403
      }
    },
    {
      id:3,
      username: "python_maestro",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
        { 
          mediaSrc: "https://images.unsplash.com/photo-1690953283588-4a72c032c9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2luZW1hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwZGV2ZWxvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        { 
          mediaSrc: "https://images.unsplash.com/photo-1604769688135-f245c9f9a486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhbGt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
      ],
      feedDetails: {
        caption: "The life of a python developer",
        likes: 4348,
        username: "python_maestro",
        commentCount: 215
      }
    }
  ])

  const shareModal = () => {
        return(
        <div className='fixed h-full w-full' 
            id='modal-container'
          // style={{backgroundColor: "rgb(0 0 0 / 0.25)",}}
          >
          <div className='h-full w-full'  onClick={() => displayShareModal()} style={{backgroundColor: "rgb(0 0 0 / 0.7)",}}></div>
          <ShareModal/>
        </div>
        )
    }

    const [shareModalCalled, setShareModalCalled] = useState(false)
    const [commentModalCalled, setCommentModalCalled] = useState(false)

    const displayShareModal = () => {
      if(shareModalCalled === true){
        setShareModalCalled(false)
        document.body.style.overflow = "scroll"
      }else{
        setShareModalCalled(true)
        document.body.style.overflow = "hidden"
      }
    }

  return (
    <div className="App  sm:w-1/2 m-auto ">
      {/* <div className="App-header bg-zinc-900">
        <div>Feeds</div>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
      </div> */}
      <div className="App-header bg-zinc-950">
        <div className='font-bold py-2'>Feeds</div>
        {feeds.map((feed:any, index:number) => 
          <div key={index}>
            <Feed
              id = {index}
              feed = {feeds[index]}
              shareModalCB={displayShareModal}
            />
          </div>
        )}
        {shareModalCalled? shareModal() : ""}
      </div>
    </div>
  );
}

export default App;
