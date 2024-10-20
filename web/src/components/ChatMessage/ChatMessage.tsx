import Avatar from '../../assets/avatar'
import './ChatMessage.css'
import { message } from '../interfaces/message'
const ChatMessage = (message:message)=>{
    return (
        <div className={`chat-message ${message.user === 'gpt' && "chatgpt"}`}>
            <div className="chat-mesage-center">
                <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                    {message.user==='gpt' && (<Avatar/>)}
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div>
    )
}

export default ChatMessage