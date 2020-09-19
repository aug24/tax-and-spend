export function daysInYear(year:string): number {
   // years represent start date for financial year.
   // if the year after (which contains feb) is a leap year, the financial year had 366 days
   if ((parseInt(year)+1) % 4 === 0) 
     return 366
   else 
     return 365
}
