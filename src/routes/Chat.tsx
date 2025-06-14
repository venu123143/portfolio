import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, FiPaperclip, FiSmile, FiMic, FiImage, 
  FiVideo, FiFile,  FiLink, FiBold, FiItalic,
  FiList, FiCode, FiMoreHorizontal, 
  FiCamera, FiUpload, FiMusic
} from 'react-icons/fi';
import TextareaAutosize from 'react-textarea-autosize';

interface Message {
  id: string;
  text: string;
  type: 'text' | 'file' | 'image' | 'video' | 'audio';
  fileUrl?: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isAttachMenuOpen, setIsAttachMenuOpen] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      type: 'text',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const fileType = file.type.split('/')[0];
      const newMessage: Message = {
        id: Date.now().toString(),
        text: file.name,
        type: fileType as 'image' | 'video' | 'audio' | 'file',
        fileUrl: URL.createObjectURL(file),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newMessage]);
    });
    setIsAttachMenuOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (e.ctrlKey) {
        e.preventDefault();
        setInputText(prev => prev + '\n');
      } else if (!e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    }
  };

  const formatText = (format: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = inputText;
    
    let prefix = '';
    let suffix = '';
    
    switch(format) {
      case 'bold':
        prefix = '**';
        suffix = '**';
        break;
      case 'italic':
        prefix = '_';
        suffix = '_';
        break;
      case 'code':
        prefix = '`';
        suffix = '`';
        break;
      case 'list':
        prefix = '- ';
        suffix = '\n';
        break;
    }
    
    const newText = text.substring(0, start) + prefix + text.substring(start, end) + suffix + text.substring(end);
    setInputText(newText);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0 flex items-center justify-center text-white font-medium shadow-md">
              {message.type === 'text' ? 'You' : <FiFile className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">You</span>
                <span className="text-sm text-gray-500">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <motion.div 
                className={`rounded-2xl p-4 shadow-sm ${
                  message.type === 'text' ? 'bg-gradient-to-br from-gray-50 to-gray-100' : 'bg-white border border-gray-200'
                }`}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {message.type === 'text' ? (
                  <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">{message.text}</p>
                ) : (
                  <div className="flex items-center gap-3">
                    {message.type === 'image' && <FiImage className="w-6 h-6 text-blue-500" />}
                    {message.type === 'video' && <FiVideo className="w-6 h-6 text-purple-500" />}
                    {message.type === 'audio' && <FiMic className="w-6 h-6 text-green-500" />}
                    {message.type === 'file' && <FiFile className="w-6 h-6 text-orange-500" />}
                    <span className="text-gray-800 font-medium">{message.text}</span>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div className="border-t border-gray-200 px-8 py-4 bg-white">
        <div className="relative rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-colors shadow-sm overflow-hidden">
          <AnimatePresence>
            {isFormatting && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-lg border border-gray-200 py-2 px-3"
              >
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => formatText('bold')}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                    title="Bold (Ctrl+B)"
                  >
                    <FiBold className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatText('italic')}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                    title="Italic (Ctrl+I)"
                  >
                    <FiItalic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => formatText('code')}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                    title="Code (Ctrl+E)"
                  >
                    <FiCode className="w-4 h-4" />
                  </button>
                  <div className="w-px h-5 bg-gray-200 mx-1" />
                  <button 
                    onClick={() => formatText('list')}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FiList className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-blue-600 transition-colors">
                    <FiLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {isAttachMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-lg border border-gray-200 p-3 min-w-[200px]"
              >
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-500 group-hover:bg-blue-100 transition-colors">
                      <FiUpload className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-600">Upload File</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                    <div className="p-3 bg-purple-50 rounded-lg text-purple-500 group-hover:bg-purple-100 transition-colors">
                      <FiCamera className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-600">Camera</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                    <div className="p-3 bg-green-50 rounded-lg text-green-500 group-hover:bg-green-100 transition-colors">
                      <FiMusic className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-600">Audio</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                    <div className="p-3 bg-orange-50 rounded-lg text-orange-500 group-hover:bg-orange-100 transition-colors">
                      <FiVideo className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-600">Video</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Input Area */}
          <div className="flex items-end">
            <div className="flex-1">
              <TextareaAutosize
                ref={textareaRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Write your message... (Ctrl+Enter for new line)"
                className="w-full p-4 border-none rounded-2xl focus:outline-none text-gray-800 placeholder-gray-400 min-h-[44px] bg-transparent"
                minRows={1}
                maxRows={6}
                style={{ resize: 'none' }}
              />
            </div>
          </div>

          {/* Enhanced Toolbar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setIsFormatting(!isFormatting);
                  setIsAttachMenuOpen(false);
                  setIsEmojiOpen(false);
                }}
                className="p-2 hover:bg-white rounded-lg text-gray-500 hover:text-blue-600 transition-colors relative group"
              >
                <FiMoreHorizontal className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Formatting
                </span>
              </button>
              <button
                onClick={() => {
                  setIsAttachMenuOpen(!isAttachMenuOpen);
                  setIsFormatting(false);
                  setIsEmojiOpen(false);
                }}
                className="p-2 hover:bg-white rounded-lg text-gray-500 hover:text-blue-600 transition-colors relative group"
              >
                <FiPaperclip className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Attach files
                </span>
              </button>
              <button 
                onClick={() => {
                  setIsEmojiOpen(!isEmojiOpen);
                  setIsFormatting(false);
                  setIsAttachMenuOpen(false);
                }}
                className="p-2 hover:bg-white rounded-lg text-gray-500 hover:text-blue-600 transition-colors relative group"
              >
                <FiSmile className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Emoji
                </span>
              </button>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`p-2 hover:bg-white rounded-lg transition-colors relative group ${
                  isRecording ? 'text-red-500' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <FiMic className="w-5 h-5" />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Voice message
                </span>
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-sm"
            >
              <span>Send</span>
              <FiSend className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          multiple
          className="hidden"
          accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
        />
      </div>
    </div>
  );
};

export default Chat;