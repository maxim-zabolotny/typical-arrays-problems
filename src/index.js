
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0
  else {
      let min = array[0]
      array.forEach(el => {
        if(min > el) {
          min = el
        }
      })
      return min
    }
  }


exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0
  else {
      let max = array[0]
      array.forEach(el => {
        if(max < el) {
          max = el
        }
      })
      return max
    }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) return 0
  else {
      let sr = 0
      array.forEach(el => {
        sr += el
      })
      return sr / array.length
    }
}
