
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import  Meeting from './component/Meeting_calendar'
import Evaluation from './component/Evaluation_form'
import History from './component/History'
import Notifications from './component/Notifications'
import Questionform from './component/Questionform'
import Appointmentform from './component/Appointmentform'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            < Route path='/' element = {<Meeting/>}  />
            < Route path='/evaluation' element = {<Evaluation/>} />
            < Route path='/history' element = {<History/>} />
            < Route path='/notifications' element = {<Notifications/>} />
            < Route path='/questionform' element = {<Questionform/>} />
            < Route path='/appointmentform' element = {<Appointmentform/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
