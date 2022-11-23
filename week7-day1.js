const arr = [12, 3, 14, 18, 2, 7, 9]

const javaScriptMethod = (arr) => {
    arr.sort((a, b) => a - b)

    return arr
}

console.log(javaScriptMethod(arr))

//! ##########################################################################

const bubbleSortMethod = (arr) => {

    // 1. initialized to tell whether a swap happened or not
    let noSwaps;

    for (let i = arr.length - 1; i > 0; i--) { // for loop to tell the distance of how far to sort on the right side of the array
        let noSwaps = true; // boolean to indicate when a swapping stops
        for (let j = 0; j < arr.length; j++) { // iterate through all the elements of an array
            if (arr[j] > arr[j + 1]) { // if arr[j] is greater than its adjacent element which is arr[j+1]
                // where swapping occurs
                let temp = arr[j] // store temporarily the arr[j]
                arr[j] = arr[j + 1] // new arr[j] will now be arr[j+1]
                arr[j + 1] = temp // arr[j+1] will now be the temp which is arr[j]
                noSwaps = false // if it's false, continue iterating
            }
        }
        if (noSwaps) break; // is noSwaps is true, break the iteration because everything is already sorted
    }
    return arr;
}

console.log(bubbleSortMethod(arr))

//! ##########################################################################

const selectionSortMethod = (arr) => {

    for (let i = 0; i < arr.length; i++) { // the current value
        let lowest = i // set your lowest as your i

        for (let j = i + 1; j < arr.length; j++) { // loop to iterate through the remaining elements and find the lowest value
            if (arr[j] < arr[lowest]) { // if arr[lowest] which is your current value, is greater than j
                lowest = j      // then set the j as your new lowest
            }
        }

        [arr[i], arr[lowest]] = [arr[lowest], arr[i]] // the part where you swap your i and j
    }
    return arr

}
console.log(selectionSortMethod(arr))

//! ##########################################################################

const insertionSortMethod = (arr) => {

    let currValue; // initialized a value as current value

    for (let i = 1; i < arr.length; i++) { // outer loop iterates the first value to compare 
        currValue = arr[i] // initialized the element arr[i] as the currValue

        // the inner loop will serve as the second value to compare with the currValue, which is arr[i]
        // j must be greater than and equal to zero AND the j value must be greater than your currValue
        for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
            let temp = arr[j]; // temporarily store the value of arr[j]
            arr[j] = arr[j + 1] // the new arr[j] will be arr[j+1], arr[j+1] is the value next to arr[j]
            arr[j + 1] = temp // arr[j+1] will become the arr[j]
        }
    }

    return arr

}

console.log(insertionSortMethod(arr))