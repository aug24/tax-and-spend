import { deficits } from '../data/deficits'
import { years } from '../data/years'
import { datapoint } from '../Graph'
import { daysInYear } from './days-in-year'

export const raw = () => {
   var data: datapoint[] = []
   years.forEach( (year) => {
     const deficit = deficits[year]
     const days = daysInYear(year)
console.log(days)
     var dp: datapoint
     if (parseInt(year) % 2 === 1) {
       dp = { d:parseInt(year), c:deficit, l:NaN}
     } else {
       dp = { d:parseInt(year), l:deficit, c:NaN}
     }
     data.push(dp)
   })
   return data
}

