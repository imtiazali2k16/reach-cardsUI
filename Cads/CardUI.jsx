import React, {Component} from 'react';
//import img1 from '../assets/bismillah slide.jpg'
import "./card-style.css";
import './button'


class Card extends Component{
constructor(props){
    super(props);
    this.state = {
        isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);
}


handleClick(){
 this.setState(state => ({
  isToggleOn: !state.isToggleOn
 }));
}

    render(){
    return(
       <div className="card text-center shadow">
           <div className="owerflow">
               <img src={this.props.imgsrc} alt="Image 1" className="card-img-top"/>
           </div>
           <div className="card-body text-dark">
               <h4 className="card-title">{this.props.title}</h4>
               <p className="card-text text-secondary">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae excepturi harum facilis cumque quia hic. Debitis maiores quia aut blanditiis?
               </p>
    
               <button onClick={this.handleClick}>
                   {this.state.isToggleOn ? "Click" : "Clicked" }
               </button>
               
               
        

            
           </div>
       </div>
     
    );
    }
}

export default Card;

