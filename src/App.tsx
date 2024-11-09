import React from 'react';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
}

export default App;