import React, {useState, useReducer, useContext} from 'react';
import {FeedProvider} from './FeedContext'
import './App.css';
import Feed from './Components/Feed';

function App() {

  const [feeds, setFeeds] = useState<any>([
    {
      username: "victor_ugb",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
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
      ],
      feedDetails: {
        caption: "The life of a javascript developer",
        likes: 2200,
        username: "victor_ugb",
      }
    },
    {
      username: "ai_trainer",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
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
      ],
      feedDetails: {
        caption: "The life of an AI model trainer",
        likes: 1357,
        username: "ai_trainer",
      } 
    },
    {
      username: "javas_firstborn",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
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
      ],
      feedDetails: {
        caption: "The life of a java developer",
        likes: 3430,
        username: "javas_firstborn",
      }
    },
    {
      username: "python_maestro",
      profileImg: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60',
      mediaFeeds : [
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
      ],
      feedDetails: {
        caption: "The life of a python developer",
        likes: 4348,
        username: "python_maestro",
      }
    }
  ])


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
        <div>Feeds</div>
        {feeds.map((feed:any, index:number) => 
          <div key={index}>
            <Feed
              feed = {feeds[index]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
