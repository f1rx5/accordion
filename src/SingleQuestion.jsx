import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const SingleQuestion = (props) => {
    const isActive = props.id === props.activeId
  return (
    <article className="question">
        <header>
            <h5>{props.title}</h5>
            <button className="question-btn" type="button" onClick={()=> props.toggleQuestion(props.id)}>
                { isActive ? <AiOutlineMinus/> : <AiOutlinePlus/> }
            </button>
        </header>
        { 
            isActive ? <p>{props.info}</p> : null
        } 
    </article>
  )
}
export default SingleQuestion