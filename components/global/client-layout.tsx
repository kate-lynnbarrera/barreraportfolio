"use client"
import React from 'react'
import Footer from './footer'
import BottomBar from './bottom-bar'
import MobileNavbar from './mobile-navbar'
import DesktopNavbar from './desktop-navbar'
import { Settings } from '@/types/singletons/settings'

export default function ClientLayout({ settings, children }: {
  settings: Settings,
  children: React.ReactNode
}) {

  return (
    <>
      <DesktopNavbar settings={settings} />
      <MobileNavbar settings={settings} />
      <main>
        {children}
      </main>
      <Footer settings={settings} />
      {settings.enableBottomBar && (
        <BottomBar settings={settings} />
      )}
    </>
  )
}
