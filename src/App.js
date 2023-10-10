import logo from './logo.svg';
import './App.css';
import TimerComponent from './components/Timer';
import DescriptionComponent from './components/Description';
import { useEffect, useState } from "react";

const timeline = [
  {day: "6", time: -7150, type: "normal", description: 'Music festival begins, an event that takes place once a year and is considered to be one of the most important electronic music communities in Israel'},

  {day: "7", time: 0, type: "normal", description: '"Simchat Torah", one of the holiest Jewish days on the calendar.'},
  
  {day: "7", time: 5000, type: "normal", description: "Since it's establishment in 87', Hamas has carried out countless terrorist attacks against israeli civilians."},
  
  {day: "7", time: 10000, type: "normal", description: "Hamas is recognized as a terror organiation by the United States, United Kingdom, Canada, Japan, Australia, and the European union"},
  
  {day: "7", time: 23640, type: "normal", description: '3 Million people wake up to 5,000 rockets shot at Israel, No one knows why.'},
  
  {day: "7", time: 24300, type: "normal", description: '1,000 terrorists invade into israel'},

  {day: "7", time: 25200, type: "normal", description: 'Terrorists are taking control of dozens of cities and human settlements. Terrorists are getting into the Israeli party, and starts to mass-shoot at over 500 citizens'},

  {day: "7", time: 25500, type: "normal", description: 'Terrorists are pretending to be IDF soliders, and knock on people’s door. As they open the door, they’re getting killed.'},

  {day: "7", time: 26100, type: "normal", description: 'Hundreds of people were taken hostage by the terrorists, Terrorists are starting to shoot at citizens.'},

  {day: "7", time: 26700, type: "normal", description: 'Families starting to hide in their protected rooms, praying to not getting killed.'},
  
  {day: "7", time: 27200, type: "normal", description: 'Citizens are praying for themselves, terrorists mass shooting across Southern Israel, as Hamas are shooting bombs nonstop across Israel'},
  
  {day: "7", time: 27800, type: "normal", description: 'This is what happened in the first hour of the morning.'},
  
  {day: "7", time: 28200, type: "question", description: 'Do you really support a terror organization?'},
  
  {day: "7", time: 30200, type: "buttons", description: null},
]

function App() {

  const date = Date.now() + 3603; // 1 hour & 3 seconds from now for demo
  const [seconds, setTimer] = useState(-7150);
  const [currentTimerlineObject, setCurrentTimelineObject] = useState(timeline[0]);
  const [scrollMultiplier, setScrollMultiplier] = useState(3);
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
            setDescriptionSize((position - 11784.2421875) / 16 + 32);
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
    <h1 className='title'>Stand With Israel</h1>
      <div className='main'>
        {/* <p style={{color: "white"}}>{seconds}</p> */}
        <TimerComponent result={result} day={day} />
        <DescriptionComponent size={descriptionSize} showDesc={showDesc} content={currentTimerlineObject} />
      </div>
    </div>
  );
}

export default App;
