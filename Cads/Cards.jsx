import React, {Component} from 'react';
import Card from './CardUI';
import './button';

import img1 from '../assets/bismillah slide.jpg'
import img2 from '../assets/download.jpg'
import img3 from '../assets/slide.jpg'

class Cards extends Component{
    render(){
        return(
    <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <Card imgsrc={img1} title="BismillAllah"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img2} title="BismillAllah"/>
            </div>
            <div className="col-md-4">
            <Card imgsrc={img3} title="BismillAllah"/>
            </div>
        </div>
    </div>
   
        );
    }
}


export default Cards;