const searchIndex = [{
    id: 1,
    keywords: ['Pasha', 'Deema', 'Sasha']
  },
  {
    id: 2,
    keywords: ['Sasha', 'Andrey', 'Petya']
  },
  {
    id: 3,
    keywords: ['Peter', 'And', 'Deema']
  }
]
const searchQuery2 = 'x'

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

export const findSeveralWords = (words, objects) => {
  if (typeof words === 'string') {
    words = words.split(' ')
  }
  let nextObjects = [...objects]

  if (words.length > 0) {
    const prevWords = [...words]
    words.shift()
    nextObjects = findMatchedObjects(prevWords[0], objects)
    findSeveralWords(words, findMatchedObjects(prevWords[0], objects))
  }
  if (words.length === 0) {
    return nextObjects
  }
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

console.log(findSeveralWords(searchQuery2, searchIndex));
