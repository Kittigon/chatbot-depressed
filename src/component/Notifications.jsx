import './style/Notifications.css'

const Notifications=()=>{
    return(
        <div className="Notifications">
            <h1>การแจ้งเตือน</h1>
            <div className="Notifications-container">
                <div className="items-notifications">
                    <div>การนัดหมาย 
                        <div>XXXXXXXX@up.ac.th กิตติกร เทพอินทร์</div>
                    </div>
                    <div>15.00</div>
                </div>
                <div className="items-notifications">
                    <div>ทำแบบประเมิน     
                        <div>XXXXXXXX@up.ac.th กิตติกร เทพอินทร์</div>
                    </div>
                    <div>16.00</div>
                </div>
            </div>
        </div>
    )
}   

export default Notifications