import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createTheme, NextUIProvider, Text } from '@nextui-org/react'
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const pathRef = useRef(null);
  const myDarkTheme = createTheme({
    type: 'dark',
    theme: {
      space: {},
      fonts: {}
    }
  })
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
