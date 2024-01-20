'use client;'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { fonts } from './fonts'
import { Inter as FontSans } from 'next/font/google'
import PrelineScript from './PrelineScript'
// import { ThemeModeScript } from 'flowbite-react'
import { Flowbite, ThemeModeScript } from 'flowbite-react'
import { type FC, type PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

import { cn } from '../lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happie Web',
  description: 'Happie Fufilments '
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={fonts.rubik.variable} suppressHydrationWarning>
      <head />
      <body>
        {/* <head>
          <ThemeModeScript />
        </head> */}
        <Providers>{children}</Providers>
      </body>
      <PrelineScript />
    </html>
  )
}
