import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div className={`notification ${visible ? 'visible' : ''}`}>
      {visible && (
        <>
          <span>Item added</span>
          <img src="/Static/Symbols/correct.png" alt="Notification Icon" className="notification-icon" />
        </>
      )}
    </div>
  );
};

export default Notification;