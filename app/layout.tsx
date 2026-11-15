import './globals.css'
import { Metadata } from 'next';
import { fetchSettings } from '@/content'
import { defaultMetadata } from '@/utils/default-metadata';
import ClientLayout from '@/components/global/client-layout';

import '@fontsource-variable/inter'

export const metadata: Metadata = defaultMetadata

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const settings = await fetchSettings()

  return (
    <html lang="en">
      <body className='bg-[#F6F6F2]'>
        <ClientLayout settings={settings}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}