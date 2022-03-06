import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {


  return (
    <motion.div className="home container" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration:0.5}}>
      <motion.h2 initial={{fontSize: "20px"}} animate={{fontSize: "40px"}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button whileHover={{scale:1.1, backgroundColor:"#fff", color:"rgb(100,0,123)", fontWeight: 600}} transition={{duration:0.2}}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;