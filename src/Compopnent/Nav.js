import React from 'react'
import profile from '../Images/profile.jpeg'
import '../CSS/Nav.css'
import intro from './Component/INTRODUCTION'
import about from './Component/About'
import timeline from './Component/Timeline'
function Nav(){
    return(
        <div className="nav">
            <img src={profile} alt="Image of Reddy"></img> 
            <h1>HarishReddy</h1>
		    <h5><span>&#9993;</span>  urstrulyreddy017@gmail.com</h5>
            <a href={intro} className ="nav1">INTRODUCTION</a>
            <a href={about} className ="nav1">ABOUT</a>
            <a href={timeline} className ="nav1">TIMELINE</a><br /><br />
            <a href="https://www.facebook.com/harshavardan.rock" className="fa fa-facebook"> </a>
            <a href="https://twitter.com/HarishR07111623" className="fa fa-twitter" > </a>
            <a href="https://instagram.com/the_error_s404?igshid=16cn8paedcw80" className="fa fa-instagram" > </a>
            <a href="https://www.linkedin.com/in/harish-reddy-482281167/" className="fa fa-linkedin" target="_blank"> </a>
            <a href="https://www.linkedin.com/in/harish-reddy-482281167/" className="fa fa-snapchat-ghost" > </a>
            <a href="https://www.youtube.com/channel/UC_M3rjbE4wdVL8P-ZsLGmSA" className="fa fa-youtube" > </a>
            <p>Never stop believing in hope because meracle happens everyday..&hearts;</p>
            <br /><p>Made with &hearts; and &#9749;</p>
            <p>Something is coming..!</p>
        </div>
    )
}

export default Nav