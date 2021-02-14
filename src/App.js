import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return(
     <ChatEngine 
        height="100vh"
        projectID="bb5103f6-de28-4c32-99af-3c05acc2f53d"
        userName="jbo"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />   
    )
}

export default App