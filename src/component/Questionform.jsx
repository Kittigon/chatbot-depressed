import { createContext, useState } from "react"
import Userinfo from "./Questionpage/Userinfo"
import Quiz from "./Questionpage/Quiz"
import Scores from "./Questionpage/Score"
import '../component/style/Questionform.css'

export const Datacontext = createContext()

const Questionform=()=>{
    const [Questionform , setQuestopnform] = useState('userinfo')
    const [Score,setscore] = useState(0)
    const [Level , setLevel] = useState('')


    return(
        <Datacontext.Provider value={{Questionform,setQuestopnform,Score,setscore  , Level , setLevel}}>
            <div className="Question">
                {Questionform === 'userinfo' && <Userinfo Score={Score} Level={Level}/> }
                {Questionform === 'quiz' && <Quiz/> }
                {Questionform === 'scores' && <Scores/> }
            </div>
        </Datacontext.Provider>
    )
}   

export default Questionform