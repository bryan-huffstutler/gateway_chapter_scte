import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Membership from './images/306_SCTE_MembershipChap.jpg'
import TrainingDev from './images/306_SCTE_Awards_TrainDevChap.jpg'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <div id='awards'>
        <img  src={Membership}/>
        <img src={TrainingDev}/>
      </div>

    </div>
  );
}

export default App;
