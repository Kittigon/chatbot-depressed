import { useState } from "react"
// import axios from 'axios'




const Singlemeething=({  code ,fname , lname , date ,time})=>{
    const [showcontent , setshowcontent] = useState(false)

    // const handleremove = async (id)=>{
    //     console.log(id)
    //     await axios.delete("http://localhost:8080/appointment/"+id)
    //         .then((res)=>{
    //             console.log(res)
    //             if(res){ 
    //                 alert('การลบสำเร็จ')
    //             }
    //         })
    //         .catch((err)=>console.log(err))
    // }

    return(
        <div className="Singlemeething">
            <div className="Singlemeething-container">
                <div>{`รหัส : ${code}`}</div>
                <button className="btn-singlemeething" onClick={(()=>setshowcontent(!showcontent))}></button>
            </div>
            {showcontent && <p>{`ชื่อ : ${fname}`} {`นามสกุล : ${lname}`}</p>}
            {showcontent && <p>{`วัน/เดือน/ปี : ${date}`}<br/> {`เวลา : ${time}`}</p>}
            {/* {showcontent && <button onClick={()=>handleremove(dataId)} className="Singlemeething-delete">X</button>} */}
        </div>

    )
}

export default Singlemeething