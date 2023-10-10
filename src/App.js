import logo from './logo.svg';
import './App.css';
import TimerComponent from './components/Timer';
import DescriptionComponent from './components/Description';
import { useEffect, useState } from "react";

const timeline = [
  {day: "6", time: -7150, type: "normal", description: 'Music festival begins, an event that takes place once a year and is considered to be one of the most important electronic music communities in Israel'},

  {day: "7", time: 0, type: "normal", description: '"Simchat Torah", one of the holiest Jewish days'},
  
  {day: "7", time: 5000, type: "normal", description: "More than 3,000 Hamas terrorists are getting armed and preparing rockets"},
  
  {day: "7", time: 10000, type: "normal", description: "4,000 Young Israelis celebrate in a nature rave party"},
  
  {day: "7", time: 15640, type: "normal", description: 'Hundreds of Israeli families are sleeping in Kibutzs not far from the Gaza border'},
  
  {day: "7", time: 23640, type: "normal", description: '3 Million people wake up to 1,000 rockets shot at Israel'},
  
  {day: "7", time: 24300, type: "normal", description: '1,500 terrorists invade into israel through the Gaza border'},

  {day: "7", time: 26500, type: "normal", description: 'Terrorists are pretending to be IDF soliders, and knock on people’s door. As they open the door, they’re getting shot'},

  {day: "7", time: 28200, type: "normal", description: '500 Hundreds grandparents, mothers, fathers and children are slaughtered'},
  
  {day: "7", time: 29700, type: "normal", description: 'Others hide in shelters but get burnt'},
  
  {day: "7", time: 30700, type: "normal", description: 'Around 100 families are dragged into pickup trucks. Fathers are shot, Mothers, childrens and toddlers and even a few babies are taken'},
  
  {day: "7", time: 31700, type: "normal", description: '150 Terrorists are getting into the party and mass-shoot killing over 260 ravers, wounding hundreds of others while they escape'},

  {day: "7", time: 32700, type: "normal", description: '30 girls and boys are taken violently into Gaza'},

  {day: "7", time: 33700, type: "normal", description: 'Additional 4,000 rockets are shot into main cities across Israel, attempting to kill as many civillians as possible'},
  
  {day: "7", time: 34700, type: "normal", description: 'Citizens are praying for themselves and for their nation'},
  
  {day: "7", time: 35700, type: "normal", description: 'This is what happened in the first hour of the morning'},
  
  {day: "7", time: 36700, type: "question", description: 'Do you support these horrible actions?'},
  
  {day: "7", time: 41700, type: "buttons", description: null},
]

function App() {

  const date = Date.now() + 3603; // 1 hour & 3 seconds from now for demo
  const [seconds, setTimer] = useState(-7150);
  const [currentTimerlineObject, setCurrentTimelineObject] = useState(timeline[0]);
  const [scrollMultiplier, setScrollMultiplier] = useState(10);
  const [descriptionSize, setDescriptionSize] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(200);
  const [showDesc, setShowDesc] = useState(true);
  const [day, setDay] = useState(6);

  const dates = new Date(null);
  dates.setSeconds(seconds); // specify value for SECONDS here
  const result = dates.toISOString().slice(11, 16);

  const handleScroll = () => {
      // if(seconds > 23640) {
      //   setScrollMultiplier(1)
      // }
      // } else {
      //   setScrollMultiplier(3)
      // }

      const position = window.pageYOffset;
      // console.log(Math.round(position / 5));
      setTimer(Math.round(position*scrollMultiplier) - 7150);
      const hr = parseInt(result.substr(0,2));

      if(hr == 22 || hr == 23) {
        setDay(6);
      } else {
        setDay(7);
      }

      const sortedObj = timeline.sort((a, b) => a.time - b.time).reverse();
      let found = false;
      sortedObj.forEach((e) => {
        if(e.time < seconds && !found) {
          if(currentTimerlineObject != e) {
            setShowDesc(false)
          }
          setCurrentTimelineObject(e);
          setTimeout(() => setShowDesc(true), 600);
          if(e.type == "question") {
            setDescriptionSize((position - 4403.2001953125) / 16 + 32);
          } else {
            setDescriptionSize(null);
          }
          found = true;
          // console.log(e);
        }
      })
      
      setScrollPosition(position);
  };

  useEffect(() => {
  //   const timeout = setTimeout(() => setTimer(seconds + 1), 1000);
  //   if (seconds <= 0) clearTimeout(timeout);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clearTimeout(timeout);

      window.removeEventListener('scroll', handleScroll);
    };

  }, [seconds]);

  return (
    <div className="App">
    <h1 className='title'>October 7, Morning Timeline</h1>
      <div className='main'>
        {/* <p style={{color: "white"}}>{seconds}</p> */}
        <TimerComponent result={result} day={day} />{window.outerWidth < 600 ? <div><br/><br/><br/><br/><br/><br/></div> : <></> }
        <DescriptionComponent size={descriptionSize} showDesc={showDesc} content={currentTimerlineObject} />
      </div>
    </div>
  );
}

export default App;
