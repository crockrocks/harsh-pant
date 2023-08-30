import React from "react";
import Content from "./Content.js";
import HomeNav from "./HomeNav.js";
import '../../../index.css'

function Home(){
    return(
        <div className="Home" data-aos = "zoom-in">
            <Content />
            <HomeNav />
        </div>
    )
}

export default Home