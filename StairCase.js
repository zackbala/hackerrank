const stairCase = (n) => {
  let n_spaces = n - 1
  let n_symbols = n - (n - 1)

  for (let index = 0; index < n; index++) {
    let spaces = " ".repeat(n_spaces)
    let symbols= "=".repeat(n_symbols)

    console.log(spaces, symbols)

    n_spaces-- 
    // n_hashtags++ : half pyramid
    // n_hashtags+=2 : full pyramid
    n_symbols+=2
  }
}

stairCase(10)
