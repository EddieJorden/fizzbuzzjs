// Given a number as an input, print out every integer from 1 to that number however
// when the integer is dievisible by 3 print out "fizz"
// whe its divisible by 5 print out "buzz"
// and when its devisble by both 3 and 5 print out "fizz buzz"

let numbersArray = []
let fizzBuzzArray = []

const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        // console.log(i)
        numbersArray.push(i)
    }
    for (let j = 1; j <= numbersArray.length; j++) {
        // console.log(j)
        if(((j % 3) === 0) && ((j % 5) === 0)) {
            fizzBuzzArray.push('fizz buzz')
        // console.log(`${j} % 3 and ${j} % 5 === 0: fizz buzz`)
        }
        if((j % 3) === 0 && (j % 5) !== 0) {
            fizzBuzzArray.push('fizz')
        // console.log(`${j} % 3 === 0: fizz`)
        }
        if((j % 5) === 0 && (j % 3) !== 0) {
            fizzBuzzArray.push('buzz')
        // console.log(`${j} % 5 === 0: buzz`)
        } else if ((j % 3) !== 0 && (j % 5) !== 0) {
            fizzBuzzArray.push(j)
            // console.log(`else ${j}`)
        }
    }
    return fizzBuzzArray
}
console.log(fizzBuzz(100))