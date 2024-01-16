import DiaryHour from "./diaryHour"
import moment from 'moment'



function DiaryDay ({el, newSession, setNewSession, thisClient, clientSessions, hours, setClientSessions}) {
  const dayInfo = el;
  const day = moment(el).format('ddd Do')
  const month = moment(el).format('MMM')
console.log(day,'---el')
  const todayArr = clientSessions.filter((element)=>(moment(element.date).format('ddd Do') === day))
console.log(todayArr,'--today array', clientSessions,'--client Sessions')
const sortedTodayArr = todayArr.map((el)=>el.date = moment(el.date).format('LT'))


  
  let finArr = []
  let fillArr = () => {
    if (todayArr.length>0) {
      for (let i = 0; i<hours.length; i++) {
        for (let j = 0; j<todayArr.length; j++) {
          if (hours[i]===todayArr[j].date) {
            finArr.push(todayArr[j])
          } else {
            finArr.push(hours[i])
          }
        }
      }} else {
        finArr = [...hours]
      }
      return finArr
    }
  fillArr()
  console.log(finArr,'final array', day,'---day')
// [{date: "8:00 AM", name: "steve stevson" }, "8:00 AM", "9:00 AM"]

  return (
    <div className="day">
      <p className="session-date">{day} {month}</p>
      <ul className="day-times">
        {finArr.map((el, index)=>(<DiaryHour 
          el={el} 
          index={index} 
          key={index}
          newSession={newSession} setNewSession={setNewSession}
          thisClient={thisClient}
          clientSessions={clientSessions} setClientSessions={setClientSessions}
          dayInfo={dayInfo}
          />))}  
      </ul>
    </div>
  )
}
export default DiaryDay