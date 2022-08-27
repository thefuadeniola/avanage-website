import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { MdOutlineCancel } from 'react-icons/md'
import { chatData } from '../data/dummy'
import avatar from '../data/avatar.jpg'

const Chat = () => {
  const { closeClick } = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='font-semibold text-lg'>Chat</p>
          <button
            type='button'
            onClick={closeClick}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50 %' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-4 p-4">
          {chatData.map((item) => {
            return (
              <div className="border-b-1 border-color flex justify-between">
                <div className="rounded-full w-4 h-4">{avatar}</div>
                <div className="">
                  <p className='font-black mb-2'>{item.message}</p>
                  <p className='italic'>{item.desc}</p>
                </div>
                <div className="font-light">{item.time}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Chat 