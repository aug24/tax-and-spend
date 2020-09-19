import { deficits } from '../data/deficits'
import { years } from '../data/years'
import { datapoint } from '../Graph'
import { party } from '../party'
import { parseISO, addDays } from 'date-fns'

export const raw = () => {
   var data: datapoint[] = []
   var weeksRunningTotalC = 0
   var runningTotalC = 0
   var weeksRunningTotalL = 0
   var runningTotalL = 0
   years.forEach( (year) => {
     const deficit = deficits[year] * 100
     const weeks = 52
     const deficitPerWeek = Math.round(deficit / weeks * 1000)
     const startDay = parseISO(year + '-04-01')
     for (var week=0; week<weeks; week++) {
       var thisDay= addDays(startDay, week * 7)
       console.log(thisDay)
       var dp: datapoint
       if (party(thisDay) === "C") {
         runningTotalC += deficitPerWeek
         weeksRunningTotalC += 1
         dp = { 
           d:thisDay, 
           c:deficitPerWeek, 
           l:null, 
           ct: runningTotalC / weeksRunningTotalC, 
           lt: runningTotalL / weeksRunningTotalL
         }
       } else {
         runningTotalL += deficitPerWeek
         weeksRunningTotalL += 1
         dp = { 
           d:thisDay, 
           c:null, 
           l:deficitPerWeek, 
           ct: runningTotalC / weeksRunningTotalC, 
           lt: runningTotalL / weeksRunningTotalL
         }
       }
       data.push(dp)
     }
   })
   return data
}

