import React, { useRef, useState } from 'react'
import './Quiz.css'
import  {data}  from '../../assets/data';

const Quiz = () => {

    let [index,setIndex] = useState(0);
    const [questions,setQuestion] = useState(data[index]);

    let [lock,setLock] = useState(false);

    let [score,setScore] = useState(0);

    let [result,setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_ref = [Option1,Option2,Option3,Option4];

    const checkAns = (e,ans) => {
        // setLock(false)
        if(lock == false){
            if(questions.ans == ans){
                e.target.classList.add("Correct")
                setLock(true);
                setScore(prev=>prev+1);
            }
            else{
                e.target.classList.add("wrong")
                setLock(true);
                option_ref[questions.ans-1].current.classList.add("Correct");
            }
        }
    }

    const reset = () =>{
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setResult(false);
        setLock(false);
    }

    const next = () =>{
        if(index == data.length-1){
            setResult(true);
            return 0;
        }
        // console.log("HEyyyy!!")
        if(lock == true){
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_ref.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("Correct");
                return null;
            })
        }
    }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr/>

      {result?
      <>
      <h2>You Scored {score} out of {data.length}</h2>
      <button onClick={reset}>Reset</button>
      </>:
      <>
        <h2>{index+1}. {questions.question}</h2>
      <ul>
        <li ref={Option1} onClick={(e) => {checkAns(e,1)}}>{questions.option1}</li>
        <li ref={Option2} onClick={(e) => {checkAns(e,2)}}>{questions.option2}</li>
        <li ref={Option3} onClick={(e) => {checkAns(e,3)}}>{questions.option3}</li>
        <li ref={Option4} onClick={(e) => {checkAns(e,4)}}>{questions.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <div className="index">{index+1} of {data.length} Questions</div>
      </>}
    
    </div>
  )
}

export default Quiz
