// Given a number as an input, print out every integer from 1 to that number however
// when the integer is dievisible by 3 print out "fizz"
// whe its divisible by 5 print out "buzz"
// and when its devisble by both 3 and 5 print out "fizz buzz"

// first solution
let numbersArray = []
let fizzBuzzArray = []

const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        numbersArray.push(i)
    }
    for (let j = 1; j <= numbersArray.length; j++) {
        if(((j % 3) === 0) && ((j % 5) === 0)) {
            fizzBuzzArray.push('fizz buzz')
        }
        if((j % 3) === 0 && (j % 5) !== 0) {
            fizzBuzzArray.push('fizz')
        }
        if((j % 5) === 0 && (j % 3) !== 0) {
            fizzBuzzArray.push('buzz')
        } else if ((j % 3) !== 0 && (j % 5) !== 0) {
            fizzBuzzArray.push(j)
        }
    }
    return fizzBuzzArray
}
console.log(fizzBuzz(100))

// solution two
const fizzBuzzArrayTwo = []
const fizzBuzzTwo = (num) => {
    for(let i = 1; i < num; i++) {
        if(i % 15 === 0) {
            fizzBuzzArrayTwo.push('fizz buzz')
        } else if(i % 5 === 0) {
            fizzBuzzArrayTwo.push('buzz')
        } else if(i % 3 === 0) {
            fizzBuzzArrayTwo.push('fizz')
        }else fizzBuzzArrayTwo.push(i)
    }
    return fizzBuzzArrayTwo
}
console.log(fizzBuzzTwo(100))

// solution three
const fizzBuzzArrayThree = []
const fizzBuzzThree = (num) => {
    for (let i = 1; i <= num; i++) 
    fizzBuzzArrayThree.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
    return fizzBuzzArrayThree
}
console.log(fizzBuzzThree(100))

// solution four
for(let i = 1; i <= 100; i++) console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)