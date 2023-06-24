 export function convertEpochToSpecificTimezone(timeEpoch: any){
    var d = new Date(timeEpoch);
    var offset = new Date().getTimezoneOffset() / 60;
  
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);  //This converts to UTC 00:00
    var nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString();
}

 function computeDifferenceBetweenDates(a: any, b: any) {
  const diffTime = a - b
  
  const timeInMinutes = Math.ceil(diffTime / (1000 * 60 ))
  const timeInHours = Math.ceil(diffTime / (1000 * 60 * 60 ))
  const timeInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 ))
  const timeInMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 ))
  const timeInYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 * 12))

    return { timeInMinutes, timeInHours, timeInDays, timeInMonths, timeInYears}
}

export function convertTimePassedToString(timestamp: number) {
    let a = convertEpochToSpecificTimezone(Date.now())
    let b = convertEpochToSpecificTimezone(new Date(timestamp * 1000))
    const time = computeDifferenceBetweenDates(new Date(a), new Date(b))
    console.log(time)
  if (time.timeInMinutes < 60) {
    return `${time.timeInMinutes} minutes ago`
  } else if (time.timeInHours < 24) {
    return `${time.timeInHours} hours ago`
  } else if (time.timeInDays < 60) {
    return `${time.timeInDays} days ago`
  } else if (time.timeInMonths < 12) {
    return `${time.timeInMonths} months ago`
  } else {
    return `${time.timeInYears} years ago`
  } 
}
