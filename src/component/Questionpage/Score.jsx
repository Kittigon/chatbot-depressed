import { useContext, useEffect , useState} from "react"
import { Datacontext } from "../Questionform"
import { Link } from "react-router-dom"
import axios from "axios"


const Score=()=>{
    const {Score,setQuestopnform,setscore ,Level , setLevel} = useContext(Datacontext)

    const [data , setdata] = useState({})   

    useEffect(()=>{
        risklevel()
        gatdata()
    },[Score,Level])


    const risklevel =()=>{
        if(Score<7){
            setLevel('ไม่มีอาการของโรคซึมเศร้า')
        }else if(Score>=7 && Score<=12){
            setLevel('มีอาการของโรคซึมเศร้าระดับน้อย')
        }else if(Score>=13 && Score <= 18){
            setLevel('มีอาการของโรคซึมเศร้าระดับปานกลาง')
        }else if(Score>= 19){
            setLevel('มีอาการของโรคซึมเศร้าระดับรุนแรง')
        }
    }

    const gatdata = async()=>{
        setdata({
            score:Score,
            risk:Level
        })
    }

    //post data
    const handleclick = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/scorelevel" , data)
            .then((res)=>{
                if(res){
                    console.log(res)
                    reset()
                }})
            .catch((err)=>console.log(err))
    }

    const reset=()=>{
        setscore(0)
        setQuestopnform('userinfo')
    }

    return(
        <div className="Score">
            <h3>สรุปผลคะแนนและระดับความเสี่ยง</h3>
            <h4 className="score-user">{Score}</h4>
            <h4 >{Level}</h4>
            <button onClick={e => handleclick(e)}>ทำแบบทดสอบอีกครั้ง</button>
            <button onClick={e => handleclick(e)}><Link to="/appointmentform">นัดหมายผู้เชี่ยวชาญทางด้านสุขภาพจิต</Link></button>
            
            
        </div>
    )
}

export default Score