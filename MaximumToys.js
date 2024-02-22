const maximumToys = (prices, k) => {
  const new_prices = prices.sort(function(a, b) {
    return a - b
  })

  let count = 0

  for (let i = 0; i < new_prices.length; i++) {
    if (new_prices[i] < k) {
      k -= new_prices[i]
      count++
    }
  }
  return count

}

const prices = [1, 12, 5, 111, 200, 1000, 10]
const result = maximumToys(prices, 50)
console.log(result)
