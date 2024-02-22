const birthdayCakeCandles = (candles) => {
    let max = candles[0]
  
    for (let i = 0; i < candles.length; i++) {
      if (candles[i] > max) {
        max = candles[i]
      }
    }
  
    let countTaller = 0
  
    for (let i = 0; i < candles.length; i++) {
      if (candles[i] == max) {
        countTaller++
      }
    }
  
    return countTaller
  }
  
  candles = [3, 2, 1, 3]
  
  console.log(birthdayCakeCandles(candles))
  