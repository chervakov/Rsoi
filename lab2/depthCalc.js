function calculateDepth(obj) {
    var level = 1;
    for(var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        if(typeof obj[key] == 'object'){
            var depth = calculateDepth(obj[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}


console.log(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]))
console.log(calculateDepth([[[[[]]]]]))
console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]))