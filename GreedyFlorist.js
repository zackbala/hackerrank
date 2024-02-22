const getMinimumCost = (friends, flowers) => {
  const len = flowers.length
  let total = 0
  let numEach = 0
  let currFriend = 0

  flowers.sort(function (a, b) {
    return a - b
  })

  for (let i = len - 1; i >= 0; i--) {
    total += flowers[i] * (numEach + 1)
    ++currFriend
    if (currFriend == friends) {
      currFriend = 0
      ++numEach
    }
  }
  return total
}

const flowers = [2, 5, 6]
const price = getMinimumCost(2, flowers)
console.log(price)
