const arr = [[3],
[11, 2, 4],
[4, 5, 6],
[10, 8, -12]]

const df = (arr) => {

  let sumr = 0
  let suml = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {


      if (arr[i].length == 3 && arr.length == 4) {
        if (i - j == 1) {
          sumr += arr[i][j]
        }
        if (i + j == 3) {
          suml += arr[i][j]
        }
      }
      if (arr.length == 3) {
        if (i == j) {
          sumr += arr[i][j]
        }
        if (i + j == 2) {
          suml += arr[i][j]
        }
      }
    }
  }

  return suml - sumr
}

const result = df(arr)
console.log(result)
