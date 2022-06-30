import '../../styles/globals.css'
import { AppProps } from 'next/app'
import GlobalStyle from '../Theme/Global'
import { Router } from 'next/dist/client/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress.configure({ showSpinner: false });

// Router.events.on('routeChangeStart',()=>{
//   console.log('on start')
//   NProgress.start();
// })

// Router.events.on('routeChangeComplete',()=>{
//   console.log('on complete')
//   NProgress.done();
// })

// Router.events.on('routeChangeError',()=>{
//   console.log('on end')
//   NProgress.done();
// })

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <GlobalStyle/>
     <Component {...pageProps} />   
    </> 
  )
}

export default MyApp
