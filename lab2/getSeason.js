function getSeason(args) {
    if (args == null)
    {
        return 'Unable to determine the time of year!'
    }
    else if (args.getMonth() === 'Invalid Date'){
        throw 'Error'
    }
    else {
        if (args.getMonth()<2){
            return 'winter'
        }
        else if(args.getMonth()<5){
            return 'spring'
        }
        else if (args.getMonth()<8){
            return 'summer'
        }
        else if(args.getMonth()<=11){
            return 'autumn'
        }
    }
}

const date = new Date()

getSeason(date)