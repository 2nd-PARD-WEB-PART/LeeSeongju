import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

function Home(){
    return(
        <motion.div
      className="loginPage"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
            <p>This is main page</p>
            <Link to='/page'>
                <button>go second page</button>
            </Link>
        </motion.div>
    );
}

export default Home
