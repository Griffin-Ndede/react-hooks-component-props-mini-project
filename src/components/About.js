import React from "react";
import blogData from "../data/blog";

function About({imgSrc = "https://via.placeholder.com/215"}){
    return(
        <aside>
            <img src={imgSrc} alt="blog logo"></img>
            <p>{blogData.about}</p>
        </aside>
    )
}
export default About