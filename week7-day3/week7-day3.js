// TODO CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {

    if(!str) return ''; // edge case

    return reverseString(str.slice(1)).concat(str[0])
}

console.log(reverseString("hello")) // olleh
console.log(reverseString())

//! ##############################################################

// TODO CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

    if(str.length <= 1) return true // edge case

    if (str[0] === str[str.length - 1]){
        return isPalindrome(str.slice(1, str[str.length - 1]))
    } else {
        return false;
    }

}

console.log(isPalindrome('race car')) // true
console.log(isPalindrome('noon')) // true
console.log(isPalindrome('hello')) // false

//! ##############################################################

// TODO CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    
    if(!int) return ''
    
    let convert = int.toString().split('').reverse().join('')

    return convert

}

console.log(reverseInt())
console.log(reverseInt(521)) // 125
console.log(reverseInt(3401)) // 1043

//! ##############################################################

// TODO CHALLENGE 4: CAPITALIZE LETTERS

// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
    
    if (!str) return [];
    
    let separate = str.split(' ')
    let storage = []
    
    for (let i = 0; i < separate.length; i++){
        result = separate[i].split('')
        result[0] = result[0].toUpperCase()
        final = result.join('')
        storage.push(final)
    }
    return storage.join(' ')
}

console.log(capitalizeLetters('i love javascript'))
console.log(capitalizeLetters('somewhere over the rainbow'))

//! ##############################################################

// TODO CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    
    let objStorage = {}
    let convert = str.split('')
    
    for (let n of convert){
        if (objStorage[n] === undefined) {
            objStorage[n] = 1
        } else {
            objStorage[n] += 1
        }
    }
    
    getValues = Object.values(objStorage)
    max = Math.max(...getValues)
    
    for (let value in objStorage){
        if (objStorage[value] === max) return value
    }

}

console.log(maxCharacter('javascript')) // a

//! ##############################################################

// TODO CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", 
// for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {

    for (let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        } else if (i % 3 === 0 ) {
            console.log('Fizz')
        } else if (i % 5 === 0 ) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz())

//! ##############################################################

// TODO CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    
    let separate = sen.split(' ') 
    let maxLength = 0;
    let storage = []

    for (let element of separate){
        maxLength = Math.max(maxLength, element.length)
    }
    
    for (let element of separate){
        if(element.length === maxLength){
            storage.push(element)
        }
    }

    if (storage.length === 1){
        return String(storage[0])
    } else{
        return storage
    }
}

console.log(longestWord('Hi there, my name is Braddy'))
console.log(longestWord('Hi there, my name is Brad'))

//! ##############################################################

// TODO CHALLENGE 8: ARRAY CHUNKING

// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

    if(!len) return arr;
    
    let newArr = []
    let i = 0;
    
    while (i < arr.length){
        newArr.push(arr.slice(i, i += len));
    }

    return newArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 0))

//! ##############################################################

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    
    if(!arrays) return [];
    
    let flattened = []
    
    for (let n of arrays){
        if (Array.isArray(n)){
            flattened = flattened.concat(flattenArray(n))
        } else {
            flattened.push(n)
        }
    }
    
    return flattened

}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))


//! ##############################################################

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {

    if (str1.length === 0 || str2.length === 0) return false;
    
    let freqCounter1 = {}
    let freqCounter2 = {}
    
    for (let n of str1.toLowerCase().split('').sort()){
        if(freqCounter1[n] === undefined ){
            freqCounter1[n] = 1
        } else {
            freqCounter1[n] += 1
        }
    }
    
    for (let n of str2.toLowerCase().split('').sort()){
        if(freqCounter2[n] === undefined ){
            freqCounter2[n] = 1
        } else {
            freqCounter2[n] += 1
        }
    }
    
    if(JSON.stringify(freqCounter1) === JSON.stringify(freqCounter2)){
        return true
    } else {
        return false
    }

}

console.log(isAnagram('elbow','below')) // TRUE
console.log(isAnagram('Dormitory','dirty room##')) // FALSE

//! ##############################################

// TODO CHALLENGE 11: LETTER CHANGES

// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A

// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    
    let result = "" 
    
    for(let i = 0; i < str.length; i++){
        let letter = String.fromCharCode(str.charCodeAt(i) + 1).toLowerCase();
        
        if ( letter === 'a' || letter === 'e' || letter=== 'i' || letter === 'o' || letter === 'u'){
            vowels = letter.toUpperCase()
            result += vowels
            
        } else if (letter === '!' ){
            result += ' '

        } else {
            result += letter;

        }
    }

    return result
}

console.log(letterChanges('hello there')) //Ifmmp UIfsf

//! ##############################################

// TODO CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
    
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    
    return sum;
    
}

console.log(addAll(2,5,6,7))

//! ##############################################

// TODO CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole 
// number greater than 1 whose only factors are 1 and itself

// ex. sumAllPrimes(10) == 17

function checkPrimeNumbers(num){
    
    for(let i = 2;i < num; i++){
        if (num % i === 0 ){
            return false;
        }
    }
    return true
    
}

function sumAllPrimes(num) {
    
    let sum = 0
    
    for (let i = 2; i <= num; i++){
        if(checkPrimeNumbers(i)){
            sum += i
        }
    }
    
    return sum
    
}

console.log(sumAllPrimes(10)) // 17

//! ###############################################

// TODO CHALLENGE 14: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array

// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...args) {
    
    let newArr = []
    
    for(let i = 0; i < arr.length; i++){
        if(args.includes(arr[i])){
            arr.slice(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    
    return newArr

}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

//! ###############################################

// TODO CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== -1){
            let lowest = i
            
            for (let j = i + 1; j < arr.length; j++){
                if (arr[j] !== -1){
                    if(arr[j] < arr[lowest]){
                        lowest = j
                    }
                }
            }
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

//! ###############################################

// TODO CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined

// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    let j = 0;
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === alphabet[j]){
            j++
        } else{
           return alphabet[j]
        }
    }

}

console.log(missingLetters("abce"))
console.log(missingLetters("abcdefghjklmno"))
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"))

//! ###############################################

// TODO CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    
    let newArray = []
    let evenSums = 0;
    let oddSums = 0;
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenSums += arr[i]
        } else{
            oddSums += arr[i]
        }
    }
    
    newArray.push(evenSums,oddSums)
    
    return newArray
  
}

console.log(evenOddSums([50, 60, 60, 45, 71]))

//! ###############################################

// TODO Problem #18

// There is a malfunctioning keyboard where some letter keys do not work.
// All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces)
// and a string brokenLetters
// of all distinct letter keys that are broken, return the number of
// words in text you can fully type using this keyboard.

// Example 1:
// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.

// Example 2:
// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.

// Example 3:
// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.

// Constraints:
// 1 <= text.length <= 104
// 0 <= brokenLetters.length <= 26
// text consists of words separated by a single space without any leading or trailing spaces.
// Each word only consists of lowercase English letters.
// brokenLetters consists of distinct lowercase English letters.

const canBeTypedWords = (text, brokenLetters) => {
    
    let splitText = text.split(' ')
    let words = splitText.length;

    for (let i of splitText) {
        for (let j of brokenLetters){
            if (i.includes(j)){
                words--
                break;
            }
        }
    }

  return words
}

console.log(canBeTypedWords("hello world", "ad"))
console.log(canBeTypedWords("leet code", "lt"))
console.log(canBeTypedWords("leet code", "e"))






