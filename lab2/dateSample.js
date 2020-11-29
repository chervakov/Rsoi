function dateSample(date) {
    if (typeof(date)!=='string'){
        return false
    }
    return Math.ceil(Math.log(15/parseFloat(date))/(0.693/5730))
}


dateSample('3')
dateSample('5.777957759163509')
dateSample('11.3231.3213124')