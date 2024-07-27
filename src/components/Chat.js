import { useState } from "react"
import ChatMessage from "./ChatMessage"

const Chat = ({ messages, nickName, sendMessge }) => {
    const [formValue, setFormValue] = useState('')



    const onFormSubmit = (e) => {
        e.preventDefault()
        sendMessge(nickName, formValue)
        setFormValue('')
    }
    return (
        <div className="flex w-full justify-between items-center h-full p-10 gap-10">
            <div className="w-3/4 flex flex-col gap-5 ">
                <h1 className='text-xl w-full text-center p-2 font-bold text-white bg-green-500'>Chat</h1>
                <form onSubmit={onFormSubmit} className="w-full flex gap-5 flex-col">
                    <input className='w-full p-3 rounded-md border border-gray-200' onChange={(e) => setFormValue(e.target.value)} value={formValue} placeholder='Enter your message' />
                    <button className='bg-purple-600 px-3 py-2 text-white rounded-md'>Enter</button>
                </form>
            </div>
            <div className="w-full bg-green-200 rounded-md p-5 h-full">
                {messages.length > 0 && messages.map((message, index) => <ChatMessage key={index} message={message.message} isMyOwn={message.nickName === nickName} name={message.nickName} time={message.time} />)}
                {messages.length === 0 && <div>No messages</div>}

            </div>
        </div>

    )
}

export default Chat