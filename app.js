
function consecutive(arr, a, b){

    //Dictionary for true cases
    let opts = [a + '' +b, b + '' +a]
    //Declare result variable
    let result;

    //iterate through array
    for (let i =0; i< arr.length-1; i++){

        //for curent index, create a string of the current
        //index plus the next
        const win = [arr[i], arr[i+1]].join("")
        //check  dictionary for a match, store boolean val in match
        const match = opts.indexOf(win) !==-1

        //if match is true assign value to result and end loop
        // else result is assigned value (false) and loop continues

        if(match){
            result = match;
            break;
        }
        else{
            if(result !== true)
            result=match
        }
    }

    return result
}

//checking for (23)  or (32)
console.log(consecutive([1,2,3,4,5], 2,3))
console.log(consecutive([1,2,3,4,5], 3,2))
//checking for (15)  or (51)
console.log(consecutive([1,2,3,4,5], 1,5))
console.log(consecutive([1,2,3,4,5], 5,1))



function consecutive2(arr, a, b){

    return Math.abs(arr.indexOf(a)- arr.indexOf(b)) ==1
}

//takes the index (position number) of the second parameter
// and subtracts it by the seconds.
// if they are consecutive, it will either return 1 or -1 (3-2=1, 2-3=-1)
// Math.abs(number) returns the absolute value of a number
// Meaning its distance from zero or in simplest terms , its positive value
// So we only need to check for the number

//checking for (23)  or (32)
console.log(consecutive2([1,2,3,4,5], 2,3))
console.log(consecutive2([1,2,3,4,5], 3,2))
//checking for (15)  or (51)
console.log(consecutive2([1,2,3,4,5], 1,5))
console.log(consecutive2([1,2,3,4,5], 5,1))

function consecutive3(arr, a, b){

    //set isConsecutive to flase intially
    let isConsecutive = false
    //loop through entire array
    for(let i=0; i<arr.length-1; i++){

        //use index to create a string joining current
        //element with the next
        let string = arr[i]+""+arr[i+1]

        //if conjoined string is equal to the coinjined sring
        //of a+b or b+a assigned isConsecutive to true and end loop
        if(string==a+""+b || string==b+""+a){
            isConsecutive =true
            break
        }
        
    }

    //retrun isConsecutive once loop ends
    return isConsecutive

}

//checking for (23)  or (32)
console.log(consecutive3([1,2,3,4,5], 2,3))
console.log(consecutive3([1,2,3,4,5], 3,2))
//checking for (15)  or (51)
console.log(consecutive3([1,2,3,4,5], 1,5))
console.log(consecutive3([1,2,3,4,5], 5,1))
