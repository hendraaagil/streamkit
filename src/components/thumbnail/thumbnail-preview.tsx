import { format } from 'date-fns'
import { forwardRef } from 'react'
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
        className="absolute inset-0"
        style={{
          backgroundColor: backgroundImage ? 'transparent' : '#0F172A',
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        className="absolute inset-0 flex flex-col justify-between text-white"
        style={{
          padding: '32px 48px',
          background:
            'linear-gradient(130deg, rgba(15, 23, 42, 0.99) 10%, rgba(15, 23, 42, 0.85) 70%, rgba(15, 23, 42, 0.65) 105%)',
          border: '20px solid #0F172A',
        }}
      >
        <p style={{ fontSize: '24px', margin: 0 }}>{date}</p>
        <div
          style={{
            fontSize: '64px',
            margin: 0,
            fontWeight: 'bold',
            lineHeight: '1.1',
            textAlign: 'left',
          }}
        >
          {title.split('\n').map((line, index) => (
            <div
              key={index}
              style={{
                marginBottom:
                  index === title.split('\n').length - 1 ? 0 : '8px',
              }}
            >
              {line || '\u00A0'} {/* Non-breaking space for empty lines */}
            </div>
          ))}
        </div>

        <div className="flex">
          <div className="flex flex-col justify-center">
            <h2
              style={{
                margin: 0,
                marginBottom: '6px',
                fontSize: '32px',
                fontWeight: 'bold',
              }}
            >
              Hendra Agil
            </h2>
            <p style={{ margin: 0, fontSize: '24px' }}>Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
})

ThumbnailPreview.displayName = 'ThumbnailPreview'
