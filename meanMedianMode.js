const getMean = (array) => {
  const mean = array.reduce((acc, curr) => (acc + curr), 0) / array.length

  return Math.round(mean)
}

const getMedian = (array) => {
  const sortedArray = array.sort((a, b) => a - b) 
  if (sortedArray % 2 !== 0) {
    return sortedArray[Math.floor(sortedArray.length / 2)]
  } else {
    mid1 = sortedArray[sortedArray.length / 2]
    mid2 = sortedArray[(sortedArray.length / 2) - 1]
    return (mid1 + mid2 ) / 2
  }
}
const getMode = (array) => {
  const modeObj = {}
  array.forEach((number) => {
    if(!modeObj[number]) {
      modeObj[number] = 0
    }
    modeObj[number]++
  })

  let maxFrequency = 0
  let modes = []

  for (let number in modeObj) {
    if (modeObj[number] > maxFrequency) {
      modes = [ number ]
      maxFrequency = modeObj[number]
    } else if (modeObj[number] === maxFrequency) {
      modes.push(number)
    } 
    if (modes.length === Object.keys(modeObj).length) {
      modes = 'Theres no mode'
    }

  }
  return modes
}

const meanMedianMode = (array) => {
  const mean = getMean(array)
  const median = getMedian(array)
  const mode = getMode(array)
  return {
    mean,
    median,
    mode
  }
}

arrayTest1 = [5, 5, 2, 5, 6, 10, 2, 8, 10, 50, 1, 1, 1, 1, 5]
arrayTest2 = [1, 1, 2, 2, 2, 3, 3, 3]
arrayTest3 = [1, 1, 2, 2, 3, 3]

meanMedianMode(arrayTest2)