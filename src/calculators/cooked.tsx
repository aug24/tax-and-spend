import { deficits } from '../data/deficits'
import { years } from '../data/years'
import { datapoint } from '../Graph'
import { deflators } from '../data/deflators'

export const cooked = () => {
   var data: datapoint[] = []
   years.forEach( (year) => {
     const deficit = deficits[year]
     const deflator = deflators[year]
     const dp: datapoint = { d:parseInt(year), c:(deficit * 100 / deflator), l:NaN }
     data.push(dp)
   })
   return data
}

