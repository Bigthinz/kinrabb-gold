import React from 'react'
import Login from '../../PageComponents/Login/login'

import { motion } from 'framer-motion'
// import background from '/img/shapes.svg'

const index = () => {
  return (
    <motion.div exit={{opacity: 0}} initial={{opacity:0}} animate={{opacity:1}}>
      <Login/>
    </motion.div>
  )
}


export default index