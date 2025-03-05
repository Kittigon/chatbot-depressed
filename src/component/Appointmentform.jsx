import { useState } from "react"
import axios from 'axios'
// import {format , parse} from 'date-fns'
// import {th} from 'date-fns/locale'


const Appointmentform=()=>{

    const [form , setform ] = useState({})

    const handlechange =(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handlesubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/appointment" , form)
            .then((res)=>{
                console.log(res)
                if(res){
                    alert('บันทึกการนัดหมายเรียบร้อย !!!')
                }
            })
            .catch((err)=>console.log(err))
    }

    // แปลงเวลา
    // const [selectedDate, setSelectedDate] = useState("");

    // const handleDateChange = (event) => {
    //     const Value = event.target.value;
    //     const parsedDate = parse(Value, "yyyy-MM-dd", new Date());
        
    //     if (!isNaN(parsedDate)) {
    //         setSelectedDate(format(parsedDate, "dd MMMM yyyy", { locale: th }));
    //     } else {
    //         setSelectedDate("");
    //     }
    // };


    return(
        <div className="Appoinmentform">
            <h3>การนัดหมายผู้เชี่ยวชาญทางด้านสุขภาพจิต</h3>
            <form className="form-appoinment" onSubmit={handlesubmit}>
                <label htmlFor="">รหัสผู้ใช้งาน</label>
                <input type="text" placeholder="XXXXXX@up.ac.th"  name="code" onChange={e => handlechange(e)}/>
                <label htmlFor="">ชื่อ</label>
                <input type="text" placeholder="กรุณาป้อนชื่อของคุณ" name="fname" onChange={e => handlechange(e)}/>
                <label htmlFor="">นามสกุล</label>
                <input type="text" placeholder="กรุณาป้อนนามสกุลของคุณ" name="lname" onChange={e => handlechange(e)} />
                <label htmlFor="">เดือน / วัน / ปี</label>
                <input type="date" name="date"  onChange={e => handlechange(e)} />
                <label htmlFor="">เลือกเวลา</label>
                <select name="time" onChange={e => handlechange(e)}> 
                    <option value="09.00 น.">09.00 น.</option>
                    <option value="10.00 น.">10.00 น.</option>
                    <option value="11.00 น.">11.00 น.</option>
                    <option value="13.00 น.">13.00 น.</option>
                    <option value="14.00 น.">14.00 น.</option>
                    <option value="15.00 น.">15.00 น.</option>
                    <option value="16.00 น.">16.00 น.</option>
                </select>
                <button  >ยืนยัน</button>
            </form>
        </div>
    )
}   

export default Appointmentform