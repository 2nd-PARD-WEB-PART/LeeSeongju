import React from "react";

import {Link} from 'react-router-dom';

function Page(){
    return (
        <div className="container">
            <div>
                <p>this is second page</p>
            </div>
            <Link to='/'>
                <button>go Home</button>
            </Link>
        </div> 
    );
}

export default Page