import React, {Component} from 'react';
import Card from './CardUI';
import './button';

import img1 from '../assets/bismillah slide.jpg'
import img2 from '../assets/download.jpg'
import img3 from '../assets/slide.jpg'



class Cards extends Component{

    /*card_item =() =>{
        var arr = [1,2,3,4];

        return arr.map((val) => {
            return <h1>{val}</h1>
    });
*/

test = () => {
 var arr =[1,2,3,4];

 return arr.map((val) => {
    return <><div className="container-fluid d-flex justify-content-center">
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
</div></>
})

}

test2 = (num) => {
    var arr = [];
    for(var i=1; i<=num; i++)
    { 
        arr.push(
            <><div className="container-fluid d-flex justify-content-center">
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
        </div></>);
        }
    
   return arr;
   
   }

    render()
    {
    return (<div>{this.test2(5)}</div>);
    
        
    }

            
    //<div className="container-fluid d-flex justify-content-center">
        //<div className="row">
          //  <div className="col-md-4">
           //     <Card imgsrc={img1} title="BismillAllah"/>
           // </div>
           // <div className="col-md-4">
           // <Card imgsrc={img2} title="BismillAllah"/>
           // </div>
           // <div className="col-md-4">
           // <Card imgsrc={img3} title="BismillAllah"/>
           // </div>
       // </div>
    //</div>
   
    
}




export default Cards;