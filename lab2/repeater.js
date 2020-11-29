function repeater(str, options) {
    if (str == null) str = 'null'
    if(!options.separator) options.separator = '+'
    if(!options.additionSeparator) options.additionSeparator = '00'
    if(options.addition === undefined) {
        options.addition = ''
    }
    else if(options.addition === false) {
        options.addition = 'false'
    } else if (options.addition === null) {
        options.addition = 'null'
    }
    if(!options.additionRepeatTimes) options.additionRepeatTimes = 0
    if(!options.repeatTimes) options.repeatTimes = 0

    var regex = new RegExp('.{'+str.toString().length+'}|.{1,'+str.toString().length+'}', 'g');
    var array = str.toString().repeat(options.repeatTimes).match(regex)

    if (options.addition !== ''){
        var another_regex = new RegExp('.{'+options.addition.toString().length+'}|.{1,'+options.addition.toString().length+'}', 'g')
        var new_string = options.addition.toString().repeat(options.additionRepeatTimes).match(another_regex)

        for (var i=0;i<new_string.length;i++){
            if(i!==0){
                new_string[i] = options.additionSeparator + new_string[i]
            }
        }
    }
    for (var i=0;i<array.length;i++){
        if(i!==0){
            array[i] = options.separator +array[i]
        }

        if (options.addition !== '') {
            for (var j = 0; j < new_string.length; j++) {
                array[i] = array[i] + new_string[j]
            }
        }
    }

    return array.join('')

}

console.log(repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' }))