
const ChatMessage = ({ sender, text, timestamp }) => {
  console.log("Timestamp received in ChatMessage:", timestamp); 
  const alignClass = sender === 'user' ? 'text-end' : 'text-start';
  const bgClass = sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white';

  return (
    <div className={`mb-2 ${alignClass}`}>
      <div
        className={`d-inline-block p-2 rounded ${bgClass}`}
        style={{ maxWidth: '70%', whiteSpace: 'pre-wrap' }}
      >
        {text}
        <div className="text-end" style={{ fontSize: '0.7rem', opacity: 0.7 }}>
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
