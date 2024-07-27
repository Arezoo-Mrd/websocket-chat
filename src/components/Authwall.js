

const AuthWall = ({ nickname, setNickName, authenticate }) => {
    const onEnterPress = (k) => {
        if (k.key === 'Enter' && nickname) {
            authenticate()
        }
    }
    return (
        <div className='h-full flex flex-col gap-10 justify-center w-1/4 items-center'>
            <h1 className='text-xl w-full text-center p-2 font-bold text-white bg-green-500'>AuthWall</h1>
            <input className='w-full p-3 rounded-md border border-gray-200' value={nickname} onKeyUp={onEnterPress} onChange={(e) => setNickName(e.target.value)} placeholder='Enter your nickname' />
            <button className='bg-purple-600 px-3 py-2 text-white rounded-md' disabled={!nickname} onClick={authenticate}>Enter chat</button>
        </div>
    )
}

export default AuthWall