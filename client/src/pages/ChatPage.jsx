import ChatBot from '../components/ChatBot';
import Navbar from '../components/Navbar';

const ChatPage = ({ onLogout }) => {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <ChatBot />
    </>
  );
};

export default ChatPage;
