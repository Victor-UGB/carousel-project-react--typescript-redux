import React from 'react'
import {AiOutlineLink, AiOutlineWhatsApp, AiOutlineDelete, } from 'react-icons/ai'
import {HiOutlineChartBar} from 'react-icons/hi'
import {MdOutlineVideoLibrary, MdOutlineWhatsapp} from 'react-icons/md'
import {TbHexagonLetterX, TbSquareRoundedLetterX} from 'react-icons/tb'
import {PiCirclesThreePlusLight} from 'react-icons/pi'
import {IoIosArrowForward} from 'react-icons/io'
import {HiOutlineSquaresPlus} from 'react-icons/hi2'

const ShareModal = () => {
    return (
        <div className='animate-step-up bottom-0 p-4 absolute w-full bg-zinc-100 rounded-t-2xl' >
            <div className='bg-zinc-300 w-6 h-1 rounded m-auto mt-2'></div>
            <div className='grid grid-cols-3 gap-3 my-4 justify-around text-zinc-900 font-medium text-sm w-full '>
                <div className='bg-zinc-200 px-5 gap-1 py-3 rounded-xl flex flex-col items-center'>
                    <div><AiOutlineLink className='h-8 w-8'/></div>
                    <div>Link</div>
                </div>
                <div className='bg-zinc-200 px-5 gap-1 py-3 rounded-xl flex flex-col items-center'>
                    <div><MdOutlineWhatsapp className='h-8 w-8'/></div>
                    <div>Whatsapp</div>
                </div>
                <div className='bg-zinc-200 px-5 gap-1 py-3 rounded-xl flex flex-col items-center'>
                    <div><TbSquareRoundedLetterX className='h-8 w-8'/></div>
                    <div className='truncate'>X fka Twitter</div>
                </div>
            </div>
            <div className='flex-col flex gap-3 w-full gap-3 my-4 justify-around text-zinc-900 font-semibold text-base w-full '>
                <div className='w-full bg-zinc-200 px-5 py-3 gap-6 rounded-xl flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <div><MdOutlineVideoLibrary className='h-8 w-8'/></div>
                            <div>Manage</div>
                        </div>
                        <div className='text-zinc-500'><IoIosArrowForward/></div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <div><HiOutlineSquaresPlus className='h-8 w-8'/></div>
                            <div>Remixing</div>
                        </div>
                        <div className='text-zinc-500'><IoIosArrowForward/></div>
                    </div>
                </div>
                <div className='bg-zinc-200 px-5 py-3 rounded-xl flex gap-4 items-center'>
                    <div><HiOutlineChartBar className='h-8 w-8'/></div>
                    <div>Insights</div>
                </div>
                <div className='bg-zinc-200 px-5 py-3 text-red-500 rounded-xl flex gap-4 items-center'>
                    <div><AiOutlineDelete className='h-8 w-8 '/></div>
                    <div>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default ShareModal