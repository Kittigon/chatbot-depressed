import { useState , useEffect} from 'react'
import './style/Evaluationform.css'
import axios  from 'axios'
import Singlevaluation from './Evaluationpage/Singlevaluation'
import evaluamentdata from './data/evaluamentdata'

const Evaluation_form=()=>{

    const [data ,setdata] = useState([])
    const [scorelevel , setscorelevel] =useState([])

    useEffect(()=>{
        loadData()
        loadscore()
    },[])

    const loadData= async ()=>{
        await axios.get("http://localhost:8080/evaluation")
            .then((res)=>setdata(res.data))
            .catch((err)=>console.log(err))
    }

    const loadscore = async ()=>{
        await axios.get("http://localhost:8080/scorelevel")
            .then((res)=>setscorelevel(res.data))
            .catch((err)=>console.log(err))
    }

    const total = [...data , ...scorelevel]
    console.log(total)

    return(
        <div className="Evaluation">
            <h1>ตรวจสอบแบบประเมิน</h1>
            <div className="Evaluation-container">
                <div className="items-evaluation">
                    {evaluamentdata.map((data,index)=>{
                        return (
                            <>
                                <Singlevaluation key={index} {...data}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Evaluation_form