window.addEventListener('load', () => {
    var name_item = JSON.parse(localStorage.getItem('name'))
    var sex_item = JSON.parse(localStorage.getItem('sex'))
    var week_item = JSON.parse(localStorage.getItem('week'))
    var furniture_item = JSON.parse(localStorage.getItem('furniture'))
    var range_item = JSON.parse(localStorage.getItem('range'))
    var color_item = JSON.parse(localStorage.getItem('color'))
    var checkbox_item = JSON.parse(localStorage.getItem('checkbox'))

    var table = document.getElementById("myTable");
    for (var i = 0; i < sex_item.length; i++) {
        var row = table.insertRow(i + 1);
        var name_cell = row.insertCell(0);
        var sex_cell = row.insertCell(1);
        var week_cell = row.insertCell(2);
        var furniture_cell = row.insertCell(3);
        var range_cell = row.insertCell(4);
        var color_cell = row.insertCell(5);
        var checkbox_cell = row.insertCell(6);
        name_cell.innerHTML = name_item[i];
        sex_cell.innerHTML = sex_item[i];
        week_cell.innerHTML = week_item[i];
        furniture_cell.innerHTML = furniture_item[i];
        range_cell.innerHTML = range_item[i];
        color_cell.style.backgroundColor = color_item[i]
        checkbox_cell.innerHTML = checkbox_item[i];
    }


})


function clearAll() {
    localStorage.clear();
    window.location.reload()
}

function close() {
    window.open('', '_parent', '');
    window.close();
}
