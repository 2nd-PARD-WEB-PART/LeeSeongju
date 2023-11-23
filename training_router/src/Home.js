import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <p>This is main page</p>
            <Link to='/page'>
                <button>go second page</button>
            </Link>
        </div>
    );
}

export default Home
