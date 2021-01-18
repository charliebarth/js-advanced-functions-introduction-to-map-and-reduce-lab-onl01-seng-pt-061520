function mapToNegativize(array){
    const x =[]
    for(let i=0; i<array.length; i++){
        x.push(array[i]*-1)
    }
    return x
}

function mapToNoChange(array) {
    const y = []
    for (let i=0; i<array.length; i++) {
        y.push(array[i])
    }
    return y
}

function mapToDouble(array) {
    const z = []
    for (let i=0; i<array.length; i++) {
        z.push(array[i]*2)
    }
    return z
}

function mapToSquare(array){
    const a = []
    for (let i=0; i<array.length;i++){
        a.push(array[i]*array[i])
    }
    return a
}

function reduceToTotal(array, sum = 0) {
    for (const i in array) {
      sum += array[i]
    }
  
    return sum
}
  
function reduceToAllTrue(array) {
    for (const i in array) {
      if (array[i] === false) {
        return false
      }
    }
  
    return true
}
  
function reduceToAnyTrue(array) {
    for (const i in array) {
      if (array[i] === true) {
        return true
      }
    }
  
    return false
}