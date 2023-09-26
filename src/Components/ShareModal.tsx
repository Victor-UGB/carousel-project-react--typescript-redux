import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineLink, AiOutlineWhatsApp, AiOutlineDelete, } from 'react-icons/ai'
import {HiOutlineChartBar} from 'react-icons/hi'
import {MdOutlineVideoLibrary, MdOutlineWhatsapp} from 'react-icons/md'
import {TbHexagonLetterX, TbSquareRoundedLetterX} from 'react-icons/tb'
import {PiCirclesThreePlusLight} from 'react-icons/pi'
import {IoIosArrowForward} from 'react-icons/io'
import {HiOutlineSquaresPlus} from 'react-icons/hi2'
import Alert from './Alert'

const ShareModal = () => {

    const [textToCopy, setTextToCopy] = useState(window.location.href)
    const [alertCall, setAlertCall] = useState(false)
    const alertRef = useRef<HTMLDivElement>(null)
    const clientDevice = null

    const share = (textToShare:string, network:string) => {
        console.log(textToShare)
        //Get the request client mobile or web
        // Get the social network 
        if (network === "whatsapp"){
            console.log("whatsapp")
            try{
                window.open(`whatsapp://send?text=${encodeURIComponent(textToCopy)}`)
            }catch(error){
                console.log(error)
            }
        }else if (network === "x"){
            console.log("x")
            try{
                window.open(`twitter://share?text=${encodeURIComponent(textToCopy)}`)
            }catch(error){
                console.log(error)
            }
        }
    }

    // useEffect(){
    //     clientDevice = d
    // }

    const alertCallback = () => {
        setAlertCall(true)
        setTimeout (() => {
            // let el =document.getElementById("alert")
            if (alertRef.current){
                alertRef.current.classList.add("animate-step-up")
                setAlertCall(false)
            }
        }, 3000)
        
    }

    return (
        <div className='animate-step-up bottom-0 p-5 absolute w-full bg-zinc-100 rounded-t-3xl' >
            {alertCall? (
                <div id="alert" ref={alertRef} className="fixed top-2 z-50 animate-step-down flex ">
                    <Alert
                        alertTitle = ""
                        alertMessage = "Link Copied!"
                        alertClass = "bg-zinc-50 rounded-3xl shadow-sm w-full"
                    />
                </div>
            ) : ""}
            <div className='bg-zinc-300 w-10 h-1 rounded m-auto mb-7 bg-gradient-to-br'></div>
            <div className='grid grid-cols-3 gap-3 mt-6 mb-2 justify-around text-zinc-800 font-normal text-sm w-full '>
                <div className='bg-zinc-200 px-5 gap-1 py-4 rounded-2xl flex flex-col items-center hover:bg-zinc-100 hover:drop-shadow-lg hover:text-zinc-800'
                    onClick={() => {
                        navigator.clipboard.writeText(textToCopy);
                        console.log('copied to clipboard');
                        alertCallback()
                        }}>
                    <div><AiOutlineLink className='h-7 w-7'/></div>
                    <div 
                        >Link</div>
                </div>
                <div className='bg-zinc-200 px-5 gap-1 py-4 rounded-2xl flex flex-col items-center hover:bg-zinc-100 hover:drop-shadow-lg hover:text-zinc-800'
                    onClick={() => share(textToCopy, "whatsapp" )}>
                    <div><MdOutlineWhatsapp className='h-7 w-7'/></div>
                    <div >Whatsapp</div>
                </div>
                <div className='bg-zinc-200 px-5 gap-1 py-4 rounded-2xl flex flex-col items-center hover:bg-zinc-100 hover:drop-shadow-lg hover:text-zinc-800'
                    onClick={() => share(textToCopy, "x")}>
                    <div><TbSquareRoundedLetterX className='h-7 w-7'/></div>
                    <div className='truncate'>X fka Twitter</div>
                </div>
            </div>
            <div className='flex-col flex gap-3 my-4 justify-around text-zinc-800 font-medium text-[16px] w-full '>
                <div className='w-full bg-zinc-200 px-5 py-6 gap-5 rounded-2xl flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <div><MdOutlineVideoLibrary className='h-7 w-7'/></div>
                            <div>Manage</div>
                        </div>
                        <div className='text-zinc-500'><IoIosArrowForward/></div>
                    </div>
                    <hr className='w-full text-zinc-500 border border-1 border-zinc-300'/>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <div><HiOutlineSquaresPlus className='h-7 w-7'/></div>
                            <div>Remixing</div>
                        </div>
                        <div className='text-zinc-500'><IoIosArrowForward/></div>
                    </div>
                </div>
                <div className='bg-zinc-200 px-5 py-5 rounded-2xl flex gap-4 items-center'>
                    <div><HiOutlineChartBar className='h-7 w-7'/></div>
                    <div>Insights</div>
                </div>
                <div className='bg-zinc-200 px-5 py-5 text-red-500 rounded-2xl flex gap-4 items-center'>
                    <div><AiOutlineDelete className='h-7 w-7 '/></div>
                    <div>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default ShareModal