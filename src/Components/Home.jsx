import React from "react";
import img from "../assets/images/1630934631485.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin,faGithubSquare} from "@fortawesome/free-brands-svg-icons";

function Home (){
    return (
<main>
    <div>
        <div>
            <section>
            <img src={img} alt="avatar" /> 
            <h1></h1>
            <span></span>
            <div>
                <ul>
                <li><FontAwesomeIcon icon={faLinkedin}/></li>
                <li><FontAwesomeIcon icon={faGithubSquare}/></li>
                <li></li>
                </ul>
            </div>
            <div>
            </div>
            </section>
        </div>
    </div>
</main>
)
}


export default Home;