import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    return <>
    <h1>Kalvium Library</h1>
    <div className='flex'>
    <img id='1' src={elephant} alt="" sizes="" srcset="" />
    <img id='2' src={elephant} alt="" sizes="" srcset="" />
    <img id='3' src={elephant} alt="" sizes="" srcset="" />
    <img id='4' src={elephant} alt="" sizes="" srcset="" />
    </div>
    </>
  }
  
}
