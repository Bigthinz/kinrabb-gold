import '../../styles/globals.css'
import GlobalStyle from '../Theme/Global'

function MyApp({ Component, pageProps }) {
  return( 
    <>
      <GlobalStyle/>
     <Component {...pageProps} />   
    </> 
  )
}

export default MyApp
