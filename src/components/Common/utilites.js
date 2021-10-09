//  DATE FEATURES

export const convertStrToDate = (date, time) => {
   return Date.parse(`${date}T${time}:00.000+03:00`)
}

export const convertStrToMs = (str) => {
   let timeArr = str.split(':')
   return timeArr[0] * 1000 * 60 * 60 + timeArr[1] * 1000 * 60 + timeArr[2] * 1000
}

export const convertMsToStr = (ms) => {
   const hours = Math.floor(ms / 1000 / 60 / 60)
   const minutes = Math.floor((ms - hours * 1000 * 60 * 60) / 1000 / 60)
   return `${hours}:${minutes}`
}

// DIGITS FEATURES

export const addZero = (num) => {
   if (+num < 10) {
      return '0' + num
   }
   return num
}

// OTHER

export const bikersFilter = (members, allBikers) => {
   return allBikers.filter(b => (members.findIndex(item => item === b.name) >= 0))
}