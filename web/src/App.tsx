import { useState } from 'react'
import { SyntheticEvent } from 'react';
import './styles/App.css'
import './styles/reset.css'
import  makeRequest  from './api/api'
import SideMenu from './components/SideMenu/SideMenu';
import ChatMessage from './components/ChatMessage/ChatMessage';


function App() {
  const[input, setInput] = useState('')
  const[chatlog, setChatlog] = useState([
    {
      user:"gpt",
      message:"Como posso te ajudar hoje?"
    }
  ])

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(input)
    let response = await makeRequest(input)
    response = response.data.split('\n').map((line:string) =><p>{line}</p>)
    setChatlog([... chatlog, 
      {
        user:"me",
        message:`${input}`
      },
      {
        user:"gpt",
        message:response
      }
    ])
    setInput("")
  }
  return (
    <>
    <div className="App">
    <SideMenu/>
      <section className="chatbox">
        <div className="chat-log">
        {
          chatlog.map(({ user, message },index)=>(
            <ChatMessage key={index} user={user} message = {message}/>
          ))
        }
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input className='chat-input-textarea' name="inputMessage" value={input} onChange={e => {
                return setInput(e.target.value);
              }}/>
          </form>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
