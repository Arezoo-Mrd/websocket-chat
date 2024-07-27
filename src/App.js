
import './App.css';
import { useCallback, useState } from 'react';
import io from 'socket.io-client';
import AuthWall from './components/Authwall';
import Chat from './components/Chat';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [socket, setSocket] = useState(null)
  const [nickName, setNickName] = useState('')
  const [messages, setMessages] = useState([])
  console.log("🚀 ~ App ~ messages:", messages)




  const authenticate = useCallback(() => {
    const socket = new io('http://localhost:3000')
    setSocket(socket)

    socket.on('connect', (msg) => {
      console.log("🚀 ~ socket.on ~ msg:", msg)
      return msg
    })

    socket.on('exeption', (error) => {
      console.log("🚀 ~ socket.on ~ error:", error)
      alert('Error', error)
      // TODO: implement error in frountend
    })
    setIsAuthenticated(true)
  }, []);

  const sendMessge = (nickName, message) => {
    if (socket) {
      socket?.emit('text-chat', {
        nickName,
        message
      })
      setMessages((prev) => [...prev, { nickName, message, time: new Date().toLocaleTimeString() }])
    }
  }




  return (
    <div className="h-screen flex justify-center items-center bg-purple-50 p-5">
      {isAuthenticated ? <Chat nickName={nickName} messages={messages} sendMessge={sendMessge} /> : <AuthWall nickname={nickName} setNickName={(value) => setNickName(value)} authenticate={authenticate} />}
    </div>
  );
}

export default App;
