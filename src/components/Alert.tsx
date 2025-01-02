import React, { useState } from "react";
import "../styles/Alert.css";

type AlertType = "success" | "info" | "warning";

interface AlertProps {
  message: string;
  type: AlertType;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  return (
    <div className={`custom-alert ${type}`}>
      <div className="alert-content">
        <span>{message}</span>
        <button className="close-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
