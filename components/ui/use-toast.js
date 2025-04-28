"use client"

// Simplified toast implementation
import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description }) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 5000)
  }

  return { toast, toasts }
}

export const toast = ({ title, description }) => {
  // This is a simplified version that just logs to console
  // In a real app, you'd use a proper toast system
  console.log(`Toast: ${title} - ${description}`)
}
