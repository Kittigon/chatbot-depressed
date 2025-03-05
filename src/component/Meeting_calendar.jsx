import { useState , useEffect } from 'react';
import './style/Meething.css'
import Singlemeething from './Meethingpage/Singlemeething';
import axios from 'axios'
import Meethingdata from './data/Meethingdata'



const Meeting_calendar=()=>{
    // const [content ,setcontnet] = useState([])

    // useEffect(()=>{
    //     loadData()
    // },[])

    // const loadData= async ()=>{
    //     await axios.get("http://localhost:8080/appointment")
    //         .then((res)=>setcontnet(res.data))
    //         .catch((err)=>console.log(err))
    // }
    

    return (
        <div className='Meething'>
            <h1>การนัดหมาย</h1>
            <div className='meething-container'>
                    <section>
                        {Meethingdata.map((data,index)=>{
                            return (
                                <Singlemeething key={index} {...data}/>
                            )
                        })}
                    </section>
            </div>
        </div>  
    );
};
    

export default Meeting_calendar