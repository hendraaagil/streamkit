import { format } from 'date-fns'
import { forwardRef } from 'react'
import { Clock } from 'lucide-react'
import { gabarito } from '@/libs/fonts'
import { cn } from '@/libs/utils'

type ThumbnailPreviewProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  backgroundImage?: string
}

export const ThumbnailPreview = forwardRef<
  HTMLDivElement,
  ThumbnailPreviewProps
>(({ title, backgroundImage }, ref) => {
  const date = format(new Date(), 'iiii, d MMMM yyyy')

  return (
    <div
      ref={ref}
      className={cn(
        gabarito.className,
        'relative h-full w-full overflow-hidden',
      )}
      style={{
        width: '1280px',
        height: '720px',
        transformOrigin: 'top left',
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundColor: backgroundImage ? 'transparent' : '#0F172A',
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        }}
      />

      <div
        className={cn(
          'absolute inset-0 flex flex-col justify-between border-[20px] px-12 py-8 text-slate-50',
          {
            'border-slate-600': !backgroundImage,
            'border-slate-900': backgroundImage,
          },
        )}
        style={{
          background:
            'linear-gradient(130deg, rgba(15, 23, 42, 0.99) 10%, rgba(15, 23, 42, 0.85) 70%, rgba(15, 23, 42, 0.65) 105%)',
        }}
      >
        <div className="flex items-center text-slate-400">
          <Clock className="mr-4 size-6" />
          <p className="text-2xl font-medium">{date}</p>
        </div>
        <div className="text-7xl font-bold leading-none">
          {title.split('\n').map((line, index) => (
            <div
              key={index}
              className={cn({
                'mb-2': index < title.split(' ').length - 1,
                'mb-0': index === title.split(' ').length - 1,
              })}
            >
              {line || '\u00A0'} {/* Non-breaking space for empty lines */}
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="flex flex-col justify-center">
            <h2 className="mb-1 text-4xl font-bold">Hendra Agil</h2>
            <p className="text-xl text-slate-400">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
})

ThumbnailPreview.displayName = 'ThumbnailPreview'
