import { useState } from "react";
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs'
import './Slider.css'

export default function Slider(props){

  const[currentSlide, setCurrentSlide] = useState(0);
  const { imagesArray } = props;

  function handlePrevious(){
    setCurrentSlide(
      currentSlide === 0 ? imagesArray.length-1 : currentSlide-1
    )
  }

  function handleNext(){
    setCurrentSlide(
      currentSlide === imagesArray.length-1 ? 0 : currentSlide+1
    )
  }

  return(
    <div className="container">
      <BsArrowLeftCircleFill
      className="arrow arrow-left"
      onClick={handlePrevious}
      />
      {
        imagesArray && imagesArray.length ?
        imagesArray.map((val,index)=>
        <img
        key={index}
        alt={val}
        src={val}
        className={
          currentSlide === index
          ? "current-image"
          : "current-image hide-current-image"
        }
        />
        )
        :null
      }
      <BsArrowRightCircleFill
      className="arrow arrow-right"
      onClick={handleNext}
      />
      <span className="circle-indicators">
        {
          imagesArray && imagesArray.length ?
          imagesArray.map((_,index)=>
          <button
          className={
            currentSlide === index
            ? "current-indicator"
            : "current-indicator inactive-indicator"
          }
          onClick={()=>setCurrentSlide(index)}
          >  
          </button>
          )
          :null
        }
      </span>
    </div>
  )
}