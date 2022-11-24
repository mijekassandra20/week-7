const arr = [12, 3, 14, 18, 2, 7, 9]

const mergeSortMethod = (arr) => {

    /* edge case if the array length is less than or equal to one, means that there is nothing to sort
    since it can be that there is only one element in the array or non*/
    if (arr.length <= 1) return arr

    let middleIndex = Math.floor(arr.length / 2) // get the middleindex to break the array into 2 parts

    // LEFT ARRAY, call the recursion function, and slice from index 0 until the element before themiddleIndex
    let left = mergeSortMethod(arr.slice(0, middleIndex)) 

    // RIGHT ARRAY, call the recursion function, and slice from middle index until the last element 
    let right = mergeSortMethod(arr.slice(middleIndex))

    // call the Helper function that will sort and merge left array and right array
    return merge(left, right)

}

const merge = (left, right) => {
    let store = [] // initialized empty array, where the elements are pushed and sorted array will be stored

    let i = 0; // left
    let j = 0; // right

    // i and j must be less than the length of left array and right array, in order for the loop to continue
    while (i < left.length && j < right.length){ 
        if (left[i] < right[j]){ // if the element in left is less than element in right
            store.push(left[i]) // push the element inside 'store' array since it's the lesser value
            i++ // increment i to keep track of the iteration and so that the i will move to the next element

        } else {  // if the element in right is less than element in left
            store.push(right[j]) // push the element inside 'store' array since it's the lesser value
            j++ // increment j to keep track of the iteration and so that the j will move to the next element
        }
    }


    // if one array is already empty exit the first while loop and proceed to the next while loops where remaining elements
    // inside the array that is not empty will be pushed inside the 'store' array
    while (i < left.length){ 
        store.push(left[i])
        i++
    }

    while (j < right.length){
        store.push(right[j])
            j++
    }

    return store
}

console.log(mergeSortMethod(arr))

//! ############################################################################

//
const quickSortMethod = (arr, left = 0, right = arr.length - 1) => { 

    if (left < right) { // if left is less than right
        let pivotIndex = pivot(arr, left, right); // call the pivot function and assign it as your pivotIndex

        // subarray to the left of your pivotIndex
        quickSortMethod(arr, left, pivotIndex - 1)
        // subarray to the right of your pivotIndex
        quickSortMethod(arr, pivotIndex + 1, right) 
    }

    return arr; 
}


const pivot = (arr, left = 0, right = arr.length - 1) => {
    
    // initialize a value that will serve as your pivot, in this case the first element of your array
    let pivot = arr[left];
    // Store the current pivot index in a variable to keep track of the where the pivot would 
    let swapIndex = left;  

    for (let i = left + 1; i <= right; i++) { // to iterate all the elements of the array
        if (pivot > arr[i]) { // if pivot is greater than the current element
            swapIndex++; // increment the swapIndex variable 
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]] // swap arr[i] and swapIndex;
        }
    }

    [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]] // Swap the starting element (e.g. pivot) with the pivot index

    return swapIndex; 
}

console.log(quickSortMethod(arr))


