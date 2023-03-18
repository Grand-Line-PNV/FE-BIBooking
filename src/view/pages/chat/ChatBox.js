// import React, { useState, useEffect } from 'react';
// import { ChatList } from 'react-chat-elements';
// import { Input } from 'react-chat-elements';
// import { Button } from 'react-chat-elements';
// import 'react-chat-elements/dist/main.css';
// import './ChatBox.css';

// const ChatBox = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleInput = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSend = () => {
//     // Gửi tin nhắn tới server
//   };

//   return (
//     <div className='chat-container'>
//       <ChatList
//         className='chat-list'
//         dataSource={messages}
//       />
//       <Input
//         placeholder='Type your message'
//         multiline={true}
//         onChange={handleInput}
//         value={message}
//         rightButtons={
//           <Button
//             color='white'
//             backgroundColor='#0084FF'
//             text='Send'
//             onClick={handleSend}
//           />
//         }
//       />
//     </div>
//   );
// };

// export default ChatBox;
