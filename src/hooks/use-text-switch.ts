import { useState, useEffect } from 'react'

export function useTextSwitch(text1: string, text2: string, interval: number) {
  const [currentText, setCurrentText] = useState(text1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev === text1 ? text2 : text1))
    }, interval)

    return () => clearInterval(timer)
  }, [text1, text2, interval])

  return currentText
}
