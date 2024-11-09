import React from 'react';
import { Phone, Video, MoreVertical, Send, Paperclip, Smile } from 'lucide-react';
import { messages } from '../data/mockData';
import { currentUser } from '../data/mockData';

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
            alt="Alice Smith"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">Alice Smith</h2>
            <span className="text-sm text-green-500">Online</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Phone size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Video size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <div className="space-y-4">
          {messages['1'].map((message) => {
            const isOwn = message.senderId === currentUser.id;
            return (
              <div
                key={message.id}
                className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] ${
                    isOwn
                      ? 'bg-blue-500 text-white rounded-l-lg rounded-br-lg'
                      : 'bg-white text-gray-800 rounded-r-lg rounded-bl-lg'
                  } p-4 shadow-sm`}
                >
                  <p>{message.content}</p>
                  <span
                    className={`text-xs ${
                      isOwn ? 'text-blue-100' : 'text-gray-500'
                    } block mt-1`}
                  >
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-gray-500 hover:text-gray-700">
            <Smile size={20} />
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}