import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container" initial={{x:"10vw", opacity: 0}} animate={{x: 0, opacity:1}}>
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)} whileHover={{scale:1.2, color:"#f8e112", originX:0}}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button whileHover={{scale:1.1, backgroundColor:"#fff", color:"rgb(100,0,123)", fontWeight: 600}} transition={{duration:0.2}}>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;