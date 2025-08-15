import React, { useState, useEffect } from 'react';

const Toast = ({ message, type = 'info', duration = 4000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500/90 border-green-400';
      case 'error':
        return 'bg-red-500/90 border-red-400';
      case 'warning':
        return 'bg-yellow-500/90 border-yellow-400';
      default:
        return 'bg-cyan-500/90 border-cyan-400';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  };

  return (
    <div 
      className={`fixed top-20 right-4 z-[10000] px-6 py-4 rounded-lg border-2 ${getToastStyles()} backdrop-blur-md shadow-lg shadow-black/20 animate-slideInRight flex items-center gap-3 max-w-sm`}
      role="alert"
    >
      <span className="text-2xl">{getIcon()}</span>
      <p className="text-white font-medium">{message}</p>
      <button 
        onClick={onClose}
        className="ml-auto text-white/70 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    // Listen for custom toast events
    const handleToastEvent = (event) => {
      const { message, type, duration } = event.detail;
      const id = Date.now();
      
      setToasts(prev => [...prev, { id, message, type, duration }]);
    };

    document.addEventListener('showToast', handleToastEvent);
    
    return () => {
      document.removeEventListener('showToast', handleToastEvent);
    };
  }, []);

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
};

// Helper function to trigger toasts
export const showToast = (message, type = 'info', duration = 4000) => {
  const event = new CustomEvent('showToast', {
    detail: { message, type, duration }
  });
  document.dispatchEvent(event);
};

export default ToastContainer;
