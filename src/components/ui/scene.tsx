'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTextSwitch } from '@/hooks/use-text-switch'
import { Clock } from '@/components/ui'

const AnimatedLetter = ({
  letter,
  index,
}: {
  letter: string
  index: number
}) => {
  const isSpace = letter === ' '
  return (
    <motion.span
      key={`${letter}-${index}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isSpace ? 0 : 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: Math.random() * 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        },
      }}
      exit={{
        opacity: 0,
        y: -50,
        transition: {
          duration: 0.5,
          delay: Math.random() * 0.5,
        },
      }}
      className={`inline-block ${isSpace ? 'w-4' : ''}`}
    >
      {letter}
    </motion.span>
  )
}

type SceneProps = {
  text1: string
  text2: string
  emoji: string
}

export const Scene = ({ text1, text2, emoji }: SceneProps) => {
  const text = useTextSwitch(text1, text2, 5000)

  return (
    <div className="relative flex h-[1080px] w-[1920px] flex-col justify-center overflow-hidden bg-slate-900">
      <p className="absolute left-0 top-0 m-24 animate-wiggle text-9xl">
        {emoji}
      </p>

      {/* Animated text */}
      <h1 className="z-10 text-center text-8xl font-bold text-white">
        <AnimatePresence mode="wait">
          <motion.span key={text} className="inline-block whitespace-pre">
            {text.split('').map((letter: string, index: number) => (
              <AnimatedLetter
                key={`${letter}-${index}`}
                letter={letter}
                index={index}
              />
            ))}
          </motion.span>
        </AnimatePresence>
      </h1>

      <Clock />
    </div>
  )
}
