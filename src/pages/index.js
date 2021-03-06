import Head from 'next/head'
import Image from 'next/image'
import Hero from '../PageComponents/home/Hero'
import Layer from '../PageComponents/home/Layer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div exit={{opacity: 0}} initial={{opacity:0}} animate={{opacity:1}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo-sm.png" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" /> */}
      </Head>
      
      <main>
          <Hero/>
          <Layer/>        
      </main>

     
    </motion.div>
  )
}
