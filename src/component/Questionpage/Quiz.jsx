import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/Questiondata"
import { Datacontext } from "../Questionform"

const Quiz=()=>{
    const [current , setcurrent] = useState(0)
    const [selectChoice , setselectChoice] = useState('')
    const {Score,setscore,setQuestopnform} = useContext(Datacontext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice !== ''){
            if(selectChoice === 'A'){
                nextQuestion()
            }else if(selectChoice === 'B'){
                setscore(Score+1)
                nextQuestion()
            }else if(selectChoice === 'C'){
                setscore(Score+2)
                nextQuestion()
            }else if(selectChoice === 'D'){
                setscore(Score+3)
                nextQuestion()
            }  
        }
    }

    const nextQuestion=()=>{
        setselectChoice('')
        if(current === QuestionsData.length-1){
            setQuestopnform('scores')
        }else{
            setcurrent(current+1)
        }
    } 

    return(
        <div className="Quiz">
            <h3>{QuestionsData[current].question}</h3>
            <div className="choice">
                <button onClick={(()=>setselectChoice('A'))}>{QuestionsData[current].A}</button>
                <button  onClick={(()=>setselectChoice('B'))}>{QuestionsData[current].B}</button>
                <button  onClick={(()=>setselectChoice('C'))}>{QuestionsData[current].C}</button>
                <button  onClick={(()=>setselectChoice('D'))}>{QuestionsData[current].D}</button>
            </div>
            <p className="queslength">{`${current+1}/${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz