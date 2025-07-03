'use client'

import { useState, useRef } from 'react'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { toPng, toJpeg } from 'html-to-image'
import { Download, Image as ImageIcon, ArrowLeft, Upload } from 'lucide-react'

import { Button } from '@/components/ui'
import { ThumbnailPreview } from './thumbnail-preview'

export function ThumbnailGeneratorForm() {
  const [title, setTitle] = useState('My Amazing Title')
  const [isGenerating, setIsGenerating] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState<string>('')
  const thumbnailRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const generateImage = async (format: 'png' | 'jpeg') => {
    if (!thumbnailRef.current) return

    try {
      setIsGenerating(true)

      const dataUrl =
        format === 'png'
          ? await toPng(thumbnailRef.current, {
              width: 1280,
              height: 720,
              pixelRatio: 1,
              style: {
                transform: 'scale(1)',
                transformOrigin: 'top left',
              },
            })
          : await toJpeg(thumbnailRef.current, {
              width: 1280,
              height: 720,
              pixelRatio: 1,
              quality: 0.95,
              style: {
                transform: 'scale(1)',
                transformOrigin: 'top left',
              },
            })

      const link = document.createElement('a')
      link.download = `thumbnail-${Date.now()}.${format}`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Error generating image. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setBackgroundImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="py-8">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-6">
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Button>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Thumbnail Generator</h1>
        </div>

        <div className="space-y-8">
          <div className="rounded border border-slate-800 p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <ImageIcon className="size-5" />
              Customize Thumbnail
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-slate-100"
                >
                  Title
                </label>
                <textarea
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  rows={3}
                  className="resize-vertical w-full rounded-md border border-slate-800 bg-slate-800 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter title..."
                />
                <p className="mt-1 text-xs text-slate-400">
                  Tip: Use multiple lines for better text layout
                </p>
              </div>

              <div>
                <label
                  htmlFor="background"
                  className="mb-2 block text-sm font-medium text-slate-100"
                >
                  Background Image
                </label>
                <div className="flex gap-2">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Upload className="size-4" />
                    Upload Image
                  </Button>
                  {backgroundImage && (
                    <Button
                      onClick={() => setBackgroundImage('')}
                      variant="destructive"
                    >
                      Reset
                    </Button>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {backgroundImage && (
                  <p className="mt-2 text-xs text-slate-300">
                    Custom background image uploaded
                  </p>
                )}
              </div>

              <div className="border-t pt-4">
                <h3 className="mb-3 text-sm font-medium text-slate-100">
                  Export Options
                </h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => generateImage('png')}
                    disabled={isGenerating}
                    className="flex-1"
                    variant="outline"
                  >
                    <Download className="mr-2 size-4" />
                    PNG
                  </Button>
                  <Button
                    onClick={() => generateImage('jpeg')}
                    disabled={isGenerating}
                    className="flex-1"
                    variant="outline"
                  >
                    <Download className="mr-2 size-4" />
                    JPEG
                  </Button>
                </div>
                {isGenerating && (
                  <p className="mt-2 text-sm text-slate-100">
                    Generating image...
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Live Preview</h2>
            <div className="rounded border border-slate-800 bg-slate-100 p-4 shadow-sm">
              <div className="w-full overflow-x-auto py-2">
                <ThumbnailPreview
                  ref={thumbnailRef}
                  title={title}
                  backgroundImage={backgroundImage}
                />
              </div>
            </div>
            <p className="text-center text-sm text-slate-100">
              Preview: {format(new Date(), 'iiii, d MMMM yyyy')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
