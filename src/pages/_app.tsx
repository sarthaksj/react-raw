import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../Components/MdxRenderer/mdxRenderer';
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Script from 'next/script';
import type { AppProps } from 'next/app'
import '../Stylesheets/base/_reset.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Props = {
    header: {
      component: <Header />,
      height: '70px'
    },

    sidebar: {
      component: <Sidebar></Sidebar>,
      navbarHeight: '45px',
      sidebarWidth: '250px'
    },

    main: {
      component: (
        // <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
        // </MDXProvider>
      )
    },
  }
  return (
    <React.Fragment>
      <Script
        src="https://kit.fontawesome.com/51eee32d4c.js"
        crossOrigin="anonymous" />
      <Layout Components={Props} />
    </React.Fragment>
  )
}




