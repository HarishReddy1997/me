import React from 'react'
import '../CSS/About.css'
function About(){
    return(
    <div className="About">
        <p className="question">ABOUT US</p>
        <p className="heading">WHO AM I ?</p>
        <p className="data">I am a computer graduate student from SIT-Tumkur.
           I love building Webpages.U can visit my profile to know 
           more about me.I love photgraphy too. Please do visit my Instagram and youtube channel. 
           <br></br><br />Me and my have a youtube channel 
           with name RjSiddu.I love to work where I find challenges.I am currently
           working in TCS as Enginner Traine.I am experienced in bulding web pages using HTML,CSS, React JS
        </p>
        <p className="question1">WHAT I DO ?</p>
        <h1 className="heading">HERE ARE SOME OF MY EXPERTISE</h1>
        <div className="expertise1">
            <h1 className="headE">WEB DEVELOPMENT</h1>
            <p className="dataE">I have experience in building webpages using HTML,CSS, 
            React JS I am good in Java and other programming language.I love handling erros</p>
        </div>
        <div className="expertise2">
            <h1 className="headE">DATA STRUCTURES and ALGORITHM</h1>
            <p className="dataE">As coming from the CS background, I have good grasp over fundamental 
            concepts of DSA.I have better understanding of OOPS and SQL concepts.</p>
        </div>
        <div className="expertise3">
            <h1 className="headE">PHOTOGRAPHY</h1>
            <p className="dataE">I do photography and picture editig
	using adobe, picsart,photoshop. Please do check my youtube channel and subscribe</p>
        </div>
    </div>    
    )
}

export default About