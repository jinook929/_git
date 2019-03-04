// ## Sort from the biggest number to the smallest ##

var nums = [1, 2, 3, 4]

function sort(numArray) {
    while (nums.length !== 0) {
        // 1. find the biggest number
        //    1) compare the first two numbers
        //    2) compare the bigger number with the next number
        //    3) compare the biggest number with the next number
        var max = 0
        nums.forEach(function (num, index) {
            if (num >= max) {
                max = num
            } else {
                max = max
            }
        })
        var id = nums.indexOf(max)

        // 2. log the number in console
        console.log(max)

        // 3. delete the biggest number
        nums.splice(id, 1)
    }

    // 4. loop with the rest of the numbers.
}
sort(nums)
console.log('**************************')


// ## Reverse order ##

var nums = [1, 2, 3, 4]
var colors = ["red", "orange", "yellow", "green"]

function printReverse(array) {
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }
}

printReverse(colors)
printReverse(nums)
console.log('**************************')


// ## Check if all are the same ##

var array0 = ['b', 'b', 'b', 'c']
var array1 = [1, 1, 1, 1]
var array2 = [2, 1, 1, 1]
var array3 = ['a', 'b', 'p']
var array4 = ['b', 'b', 'b']
var array5 = [1, 1, 1, 1, 5]

// is first different from the second?
// if yes, return false on console
// else(no), compare with the next
// when finished with all no, then return true on console

function isUniform(array) {
    var standard = array[0]
    for (i = 1; i < array.length; i++) {
        if (array[i] !== standard) {
            return console.log(false)
        }
    }
    console.log(true)
}

isUniform(array0)
isUniform(array1)
isUniform(array2)
isUniform(array3)
isUniform(array4)
isUniform(array5)
console.log('**************************')


// ## Sum all ##

var arr1 = [1, 2, 3]
var arr2 = [10, 3, 10, 4]
var arr3 = [-5, 100]


function sumArray(arr) {
    var sum = 0
    // sum all
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum)
}

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)

// for(i = 0; i < arr.length; i++) {
// sum = sum + arr[i]
// }
// return console.log(sum)
console.log('**************************')

function maximum(arr) {
    for (i = 0; i < arr.length; i++) {
        var max = 0
        arr.forEach(function (num) {
            if (num >= max) {
                max = num
            } else {
                max = max
            }
        })
        console.log(max)
    }
}

maximum(arr1)
maximum(arr2)
maximum(arr3)
console.log('**************************')