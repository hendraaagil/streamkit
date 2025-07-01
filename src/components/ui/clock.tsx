'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TZDate } from '@date-fns/tz'
import { cn } from '@/libs/utils'

type ClockProps = {
  className?: string
}

export const Clock = ({ className }: ClockProps) => {
  // TODO: find a better way to find the timezone
  const [time, setTime] = useState(() => new TZDate(new Date(), 'Asia/Jakarta'))

  // Memoize the update function to prevent recreating it on every render
  const updateTime = useCallback(() => {
    setTime(new TZDate(new Date(), 'Asia/Jakarta'))
  }, [])

  useEffect(() => {
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [updateTime])

  const { hours, minutes, seconds } = useMemo(() => {
    const h = time.getHours().toString().padStart(2, '0')
    const m = time.getMinutes().toString().padStart(2, '0')
    const s = time.getSeconds().toString().padStart(2, '0')
    return { hours: h, minutes: m, seconds: s }
  }, [time])

  return (
    <div
      className={cn(
        'flex max-w-fit rounded-lg bg-slate-800 px-10 py-8 text-7xl font-bold text-slate-50',
        className,
      )}
    >
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
          transition={{
            type: 'tween',
            duration: 0.25,
            ease: 'easeOut',
          }}
          className="absolute inset-0 flex items-center justify-center"
          suppressHydrationWarning
        >
          {digit}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
