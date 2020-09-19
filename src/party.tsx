import { elections } from './data/elections'
import { formatISO } from 'date-fns'


export function party(date: Date) {
  const dateAsString = formatISO(date, { format: 'basic' }).substring(0,8)
  for (var i=0; i<elections.length; i++) {
    var election = elections[i]
    if (election.f <= dateAsString && election.t > dateAsString)
      return election.winner
  }
}
