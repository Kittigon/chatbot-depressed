import { useContext , useState  } from "react"
import axios from 'axios'
import { Datacontext } from "../Questionform"

const Userinfo=()=>{
    const { setQuestopnform  } = useContext(Datacontext)

    const [form , setform ] = useState({})

    const handlechange =(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }


    const handlesubmit = async(e)=>{
        e.preventDefault();
        console.log(form)
        await axios.post("http://localhost:8080/evaluation" , form)
            .then((res)=>{
                if(res){
                    alert('บันทึกข้อมูลเรียบร้อย !!!')
                }
            })
            .catch((err)=>console.log(err))
    }


    return(
        <div className="userinfo">
            <h3>กรูณาป้อนข้อมูลให้ครบสมบูรณ์เพื่อทำแบบทดสอบ</h3>
            <div className="form-container">
                <form className="form" onSubmit={handlesubmit} >
                    <label >รหัสผู้ใช้งาน</label>
                    <input type="text" placeholder="xxxxxx@up.ac.th" name="code" onChange={e => handlechange(e)}/>
                    <label >ชื่อ </label>
                    <input type="text" placeholder="กรุณาป้อนชื่อของคุณ" name="fname" onChange={e => handlechange(e)}/>
                    <label >นามสกุล</label>
                    <input type="text" placeholder="กรุณาป้อนนามสกุลของคุณ" name="lname" onChange={e => handlechange(e)}/>
                    <label>เบอร์โทรติดต่อ</label>
                    <input type="text" placeholder="กรุณาป้อนเบอร์โทรติดต่อ" name="call" onChange={e => handlechange(e)}/>
                    <div className="btn-container">
                        <button className="btn" type="submit" >บันทึกข้อมูล</button>
                        <button onClick={(()=>setQuestopnform('quiz'))} className="btn-start">ทำแบบทดสอบ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Userinfo