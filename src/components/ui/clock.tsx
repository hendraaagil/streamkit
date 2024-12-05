'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    return [hours, minutes, seconds]
  }

  const [hours, minutes, seconds] = formatTime(time)

  return (
    <div className="absolute bottom-0 right-0 m-24 flex rounded-lg bg-slate-800 px-10 py-8 text-7xl font-bold text-slate-50">
      <AnimatedDigit digit={hours[0]} />
      <AnimatedDigit digit={hours[1]} />
      <span className="mx-1">:</span>
      <AnimatedDigit digit={minutes[0]} />
      <AnimatedDigit digit={minutes[1]} />
      <span className="mx-1">:</span>
      <AnimatedDigit digit={seconds[0]} />
      <AnimatedDigit digit={seconds[1]} />
    </div>
  )
}

function AnimatedDigit({ digit }: { digit: string }) {
  return (
    <div className="relative h-[1.2em] w-[1ch] overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={digit}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center"
          suppressHydrationWarning
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
