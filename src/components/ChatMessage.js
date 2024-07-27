
const ChatMessage = ({ isMyOwn, message, time, name }) => {
    console.log("🚀 ~ ChatMessage ~ name:", name)
    console.log("🚀 ~ ChatMessage ~ time:", time)
    console.log("🚀 ~ ChatMessage ~ message:", message)
    return (
        <div>
            <span>{isMyOwn ? 'Me' : name}</span>
            <span>{time}</span>
            <p>{message}</p>
        </div >
    )
}


export default ChatMessage