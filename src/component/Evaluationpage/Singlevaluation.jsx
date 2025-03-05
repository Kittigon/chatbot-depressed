

const Singlevaluation=({code ,fname , lname , call ,score , risk })=>{


    return(
            <div className="Singleevaluetion">
                <div className="Singleevaluetion-container">
                    <p>{`คะแนน : ${score} `}</p>
                    <p>{`ระดับความเสี่ยง : ${risk}`}</p>
                    <p>{code}</p>
                    <p>{`${fname} ${lname}`}</p>
                    <p>{`เบอร์โทรติดต่อ : ${call}`}</p>
                </div>
            </div>
    )
}

export default Singlevaluation