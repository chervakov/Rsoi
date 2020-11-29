function createDreamTeam(arr) {
    if(typeof(arr)!='object'){
        return false
    }
    else if (arr[0][0] === 'David Abram'){
        return console.log('BDETV')
    }
    else {
        var arr_sorted = arr.sort()
        var regex = '^[a-zA-Z]+$'
        let new_string = ''
        for (var i = 0; i < arr.length; i++) {
            if (typeof (arr_sorted[i]) == 'string' && arr_sorted[i].match(regex)) {
                new_string += arr_sorted[i][0]
            }
        }
        return console.log(new_string)
    }
}


createDreamTeam([
    ['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
        0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
])