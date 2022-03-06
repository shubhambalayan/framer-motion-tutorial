import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container" initial={{x:"10vw", opacity: 0}} animate={{x: 0, opacity:1}}>

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)} whileHover={{scale:1.2, color:"#f8e112", originX:0}}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" initial={{x:"-20vw", opacity:0}} animate={{x: 0, opacity:1}}>
          <Link to="/toppings">
            <motion.button whileHover={{scale:1.1, backgroundColor:"#fff", color:"rgb(100,0,123)", fontWeight: 600}} transition={{duration:0.2}}>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;