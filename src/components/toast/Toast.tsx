"use client";
import { useEffect } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  width: 75vw;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${slideUp} 0.5s ease-out forwards;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Toast = ({ message, onClose }: ToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return <ToastContainer>{message}</ToastContainer>;
};
