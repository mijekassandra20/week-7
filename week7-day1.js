const arr = [12, 3, 14, 18, 2, 7, 9]

const javaScriptMethod = (arr) => {
    arr.sort((a, b) => a - b)

    return arr
}

// console.log(javaScriptMethod(arr))

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

// console.log(bubbleSortMethod(arr))

//! ##########################################################################

const selectionSortMethod = (arr) => {

    for (let i = 0; i < arr.length; i++) { // itea
        let lowest = i 

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }

        [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
    return arr

}
// console.log(selectionSortMethod(arr))

//! ##########################################################################

const insertionSortMethod = (arr) => {

    let currValue;

    for (let i = 1; i < arr.length; i++) {
        currValue = arr[i]

        for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
            let temp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }

    return arr

}

console.log(insertionSortMethod(arr))