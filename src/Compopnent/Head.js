import React, {Component} from 'react'
import Background1 from '../Images/background.jpg'
import Background2 from '../Images/background1.jpeg'
import Background3 from '../Images/background2.jpeg'
import '../CSS/Head.css'

class Head extends Component{
    constructor(){
        super()
        this.state={
            dot : 1,
            link : "LinkedIn",
            href :"https://www.linkedin.com/in/harish-reddy-482281167/",
            h1 : "Hi..!",
            h2 : "I'm Harish",
           
            
        }   

    }

    componentDidMount() {
        this.interval = setInterval(() => {
          let count = this.state.dot;
          if(count === 3)
          {
             count =0 ;
          }
          count++;
          this.setState({ dot : count })
          if(count === 2){
            this.setState({
                h1 : "I love",
                h2 : "Building Things",
                link : "Github",
                href : "https://github.com/HarishReddy1997",
            })
          }
          if(count === 3){
            this.setState({
                h1 : "I Do",
                h2 : "Photography",
                link : "Instagram",
                href : "https://instagram.com/a_a_p_i_b_s?igshid=352kxiaspr9u",
            }) 
          }
          if(count === 1)
          {
              this.setState({
                link : "LinkedIn",
                href :"https://www.linkedin.com/in/harish-reddy-482281167/",
                h1 : "Hi!",
                h2 : "I m Harish",
              })
          }
        }, 3000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
      

      render()
        {
            const style = {
                backgroundImage : `url(${Background2})`,
                
            }

        let dot = this.state.dot;
        if(dot === 2){
            style.backgroundImage = `url(${Background1})`
               
        }
        if(dot === 3){
            style.backgroundImage = `url(${Background3})`
        }

        return(
            <div style = {style} className="headBar">
                <div className="head">
                <h1 className="headh1">{this.state.h1}</h1>
                <h2 className="headh2">{this.state.h2}</h2>
                <a href={this.state.href} className="a">{this.state.link} &rarr;</a>
                </div>
            </div>
        )
    }
}
export default Head