import { count } from 'console'
import React, {useState} from 'react'
import {GoDot, GoDotFill} from 'react-icons/go'
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'

interface Props {
  feeds : []
}

const Carousel:React.FC<Props>
  = ({feeds}) => {

  const [count, setCount] = useState<number>(0)

  const drag = (ref:string) => {
    // Get item being dragged
    let item = ref
    // Switch count on drag direction
  }

  return (
    <div className='max-sm:w-screen'>
      <div className='relative flex'>
        <div className='flex overflow-hidden snap-x snap-mandatory'>
          {/* {mediaFeeds.map((i:any, key:number) => 
            <div className=' h-96 bg-zinc-100 snap-center' key={key} style={{minWidth: "100vw"}}>
              <img src={i.mediaSrc} alt={i.mediaSrc} className='h-full w-full'/>
              
            </div>
          )} */}
          <div className=' h-96 bg-zinc-100 snap-center' key={count} style={{minWidth: "100vw"}}>
            <img src={feeds[count]["mediaSrc"]} alt={feeds[count]["mediaSrc"]} className='h-full w-full object-cover'/>
          </div>
        </div>
        <div className='absolute bottom-1/2  flex justify-between w-full'>
          <div> <MdNavigateBefore onClick={() => ((setCount(count => count> 0? count-1 : 0)), console.log(feeds[count]["mediaSrc"]))} className='h-8 w-8'/> </div>
          <div> <MdNavigateNext onClick={() => ((setCount(count => count< 3? count+1 : 3)), console.log(count)) } className='h-8 w-8'/> </div>
        </div>
        <div className='absolute bottom-2 flex m-auto justify-center w-full'>
          {feeds.map((i:number, key:number) => 
            <div key={key} onClick={() => setCount(key)}>
              {key === count? <GoDotFill className='h-4 w-4'/>: <GoDot className='h-4 w-4'/>}
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
