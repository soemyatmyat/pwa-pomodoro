import React from "react"

let intervalId
const defaultTimer=30*60
const defaultMins=(String(Math.trunc(defaultTimer/60)).length==1)? "0"+String(Math.trunc(defaultTimer/60)):String(Math.trunc(defaultTimer/60))
const defaultSecs=(String(defaultTimer%60).length==1)? "0"+String(defaultTimer%60):String(defaultTimer%60)

function Timer() {

  const [countDownTime, setCountDownTime] = React.useState({counter: defaultTimer,mins: defaultMins, secs: defaultSecs})
  React.useEffect(() => { document.title = `Time left ${countDownTime.mins}:${countDownTime.secs}`})//display the timer in the browser tab as text

  // Function to start or resume the timer
  function run(){
    if (intervalId) clearInterval(intervalId) //clear the id if it there is a value (we only want to have 1 interval running)
    intervalId=setInterval(runCountDown,1000) //set the value for intervalId
  }
  
  // Function to stop/pause the timer
  function pause(){
    if (intervalId) clearInterval(intervalId)  //clear the id if it there is a value 
  }

  // Function counting down
  function runCountDown() {
    setCountDownTime((prevValue)=>{
      if (prevValue.counter===0) {
        pause()
        return {
          counter: defaultTimer, mins: defaultMins, secs: defaultSecs
        }
      } else {
        let newCounter=prevValue.counter--
        let minutes=String(Math.trunc(newCounter/60))
        let seconds=String(newCounter % 60)
        if (minutes.length==1) minutes="0"+minutes
        if (seconds.length==1) seconds="0"+seconds
        return {
          counter: newCounter,mins: minutes,secs: seconds
        }
      }
    })
  }
  
  // Calls the function every second
 function runTimer(event) {
   const inputName=event.target.name==undefined? event.target.id: event.target.name
   console.log(inputName)
   if (inputName==="start" || inputName==="resume") {
    run()
   } else if (inputName==="pause") {
    pause()
   } else if (inputName==="restart") {
     //default the times
    setCountDownTime({ counter: defaultTimer,mins:defaultMins,secs:defaultSecs}) 
   }
  }

  return (
    <div className="container-fluid">
      <p id="timer-display">
        <span className="count-digit">{(countDownTime.mins).charAt(0)}</span>
        <span className="count-digit">{(countDownTime.mins).charAt(1)}</span>
        <span className="separator">:</span>
        <span className="count-digit">{(countDownTime.secs).charAt(0)}</span>
        <span className="count-digit">{(countDownTime.secs).charAt(1)}</span>
      </p>
      <div className="options">
        <button id="pause" name="pause" type="button" onClick={runTimer} className="btn btn-light"><i id="pause" className="bi bi-pause-circle"></i></button>
        <button name="start" type="button" onClick={runTimer} className="btn btn-light"><i id="start" className="bi bi-play-circle"></i></button>
        <button name="restart" type="button" onClick={runTimer} className="btn btn-light"><i id="restart" className="bi bi-stop-circle"></i></button>
      </div>
    </div>
  )
}

export default Timer
