import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import ProductCard from './ProductCard';
import { formatTimestamp } from '../utils.js';

const ChatBot = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState(() => {
    const saved = localStorage.getItem('chatHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chat));
  }, [chat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const timestamp = new Date().toISOString();
    const userMessage = { sender: 'user', text: trimmed, timestamp };

    setChat((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message: trimmed });
console.log('BOT RESPONSE:', res.data); 
      const botMessage = {
        sender: 'bot',
        text: res.data.message || 'No response',
        timestamp: new Date().toISOString(),
      };

      setChat((prev) => [...prev, botMessage]);
      setProducts(res.data.products || []);
    } catch (error) {
      const botError = {
        sender: 'bot',
        text: '❌ Server error. Please try again later.'+error,
        timestamp: new Date().toISOString(),
      };
      setChat((prev) => [...prev, botError]);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleReset = () => {
    setChat([]);
    setProducts([]);
    localStorage.removeItem('chatHistory');
  };

  return (
    <div className="container my-4" style={{ maxWidth: '900px' }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-primary">🛍️ E-Commerce Sales Chatbot</h2>
        <button className="btn btn-outline-danger btn-sm" onClick={handleReset}>
          Reset Conversation
        </button>
      </div>

      <div
        className="border rounded p-3 mb-3 bg-light shadow-sm"
        style={{ height: '400px', overflowY: 'auto' }}
      >
        {chat.length === 0 && (
          <p className="text-muted text-center mt-5">Start by typing your query below...</p>
        )}
        {chat.map((msg, idx) => (
          <ChatMessage
            key={idx}
            sender={msg.sender}
            text={msg.text}
            timestamp={formatTimestamp(msg.timestamp)}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-group mb-3">
        <textarea
          className="form-control"
          placeholder="Type your message here and press Enter..."
          value={input}
          rows={2}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
        <button className="btn btn-primary" onClick={sendMessage} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {products.length > 0 && (
        <>
          <h5 className="mb-3">📦 Matching Products</h5>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4 mb-3" key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
