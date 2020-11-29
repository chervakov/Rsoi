function countCats(arr) {
    var count = 0
    for (var i=0;i<arr.length;i++) {
        for (var j=0; j<arr[i].length;j++){
            if (arr[i][j] === '^^') {
                count += 1
            }
        }
    }
    console.log(count)
}

countCats([  ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
    [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
    [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
    [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
    [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
    [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
    [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
    [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
])