// GENERATING SEARCH INDEX

export const createKeywords = (searchWords, name, startDate, members) => {
  const words = searchWords.split(' ')
  const nameWords = name.split(' ').filter(word => /[A-Za-z]+/.test(word)) // only words from name
  const year = startDate.slice(0, 4)
  const keywords = [...words, ...nameWords, year, 'mr', ...members]
    .sort()
    .map(word => word
    .toLowerCase())

  return [...new Set(keywords)]
}

// SEARCH FUNCTIONS

export const findSeveralWords = (words, objects) => {
  if (typeof words === 'string') {
    words = words.toLowerCase().split(' ')
  }

  let currentObjects = objects
  for (let i = 0; i < words.length; i++) {
    currentObjects = findMatchedObjects(words[i], currentObjects)
  }

  return currentObjects
}

const findMatchedObjects = (search, objects) => {

  return [...objects.filter(obj => {
    return findSubsringInArray(search, obj.keywords)
  })]
}

const findSubsringInArray = (substr, arr) => {
  let found = false

  for (let i = 0; i < arr.length && !found; i++) {
    if (findSubstring(substr, arr[i])) {
      found = true
    }
  }
  return found
}

const findSubstring = (substr, string) => {
  if (string.indexOf(substr) < 0) return false
  return true
}
