import { useState } from 'react';
import { ChatBotPopup } from '../features/home/components/ChatBotPopup';

export function ChatBotButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#0052CC] shadow-2xl shadow-[#0066FF]/40 hover:from-[#0052CC] hover:to-[#0044AA] hover:scale-105 hover:shadow-[#0066FF]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 focus:ring-offset-2"
        aria-label={isOpen ? 'Close chat' : 'Open chat with Sora'}
        aria-expanded={isOpen}
      >
        <img
          src="/BlueBirdBuyPage.png"
          alt="Sora Assistant"
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* Pulse animation for unread/new chat indication */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse" aria-hidden="true" />
        )}
      </button>

      {/* Chat Bot Popup */}
      <ChatBotPopup isOpen={isOpen} onClose={handleClose} />
    </>
  );
}
