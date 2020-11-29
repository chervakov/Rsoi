function transform(arr) {
    if (typeof (arr) !== 'object'){
        throw 'Error'
    }
    var new_arr = arr
    for(var i = 0; i < new_arr.length; i++){
        if (new_arr[i] === '--discard-next' && new_arr[i+2] === '--double-prev'){
            new_arr.splice(i, 3)
        }
        else if (new_arr[i] === '--discard-next' && new_arr[i+2] === '--discard-prev'){
            new_arr.splice(i, 3)
        }
        else if(new_arr[i] === '--double-next'){
            if(i === new_arr.length-1){
                new_arr.pop()
                console.log(new_arr)
            }
            else {
                new_arr.splice(i, 1, new_arr[i+1])
            }
        }
        else if(new_arr[i] === '--double-prev'){
            if(i === 0){
                new_arr.shift()
            }
            else {
                new_arr.splice(i, 1, new_arr[i-1])
            }
        }
        else if(new_arr[i] === '--discard-prev'){
            if(i === 0){
                new_arr.shift()
            }
            else {
                new_arr.splice(i-1, 2)
            }
        }
        else if(new_arr[i] === '--discard-next'){
            if(i === arr.length){
                new_arr.pop()
            }
            else {
                new_arr.splice(i, 2)
            }
        }
    }
    console.log(new_arr)
    return new_arr
}

transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])