let db = openDatabase("laba5", "1.0", "Lab 5 DB", 2 * 1024 * 1024);

db.transaction(function (t) {
     t.executeSql("CREATE TABLE IF NOT EXISTS groups (number INTEGER NOT NULL UNIQUE, course TEXT NOT NULL, facultat TEXT NOT NULL, quantity INTEGER NOT NULL, email TEXT NOT NULL UNIQUE, phone TEXT, address TEXT, curator TEXT)");
     //t.executeSql("DROP table groups");
});

class Group {

    constructor(group_number, course, facultat, student_quantity, email) {
        this._group_number = group_number;
        this._course = course;
        this._facultat = facultat;
        this._student_quantity = student_quantity;
        this._email = email;
    }

    get group_number() {
        return this._group_number;
    }

    get get_course() {
        return this._course;
    }

    get get_facultat() {
        return this._facultat;
    }

    get get_student_quantity() {
        return this._student_quantity;
    }

    get get_email() {
        return this._email;
    }
}

function addGroup() {
    let number = document.getElementById("groupNumber").value;
    let course = document.getElementById("course").value;
    let facultat = document.getElementById("facultat").value;
    let quantity = document.getElementById("studentQuantity").value;
    let email = document.getElementById("email").value;
    let group = new Group(parseInt(number, 10), course, facultat, parseInt(quantity, 10), email);
    if (document.getElementById("newProperty")) {
        let newProperty = document.getElementById("newProperty").value;
        if (newProperty === "phone") {
            Group.prototype._phone;
            group._phone = document.getElementById("property").value;
        } else if (newProperty === "address") {
            Group.prototype._address;
            group._address = document.getElementById("property").value;
        } else if (newProperty === "curator") {
            Group.prototype._curator;
            group._curator = document.getElementById("property").value;
        }
    }
    insert(group, group.group_number);
}

function insert(group, number) {
    db.transaction(function (t) {
        t.executeSql("INSERT INTO groups (number, course, facultat, quantity, email) VALUES (?,?,?,?,?)",
            [group.group_number, group.get_course, group.get_facultat, group.get_student_quantity, group.get_email]);
    });
    if("_phone" in group) {
        db.transaction(function (t) {
            t.executeSql("UPDATE groups set phone = ? where (number = ?)",
                [group._phone, number], success, error);
        });
    } else
    if("_address" in group) {
        db.transaction(function (t) {
            t.executeSql("UPDATE groups set address = ? where (number = ?)",
                [group._address, number], success, error);
        });
    }else
    if("_curator" in group) {
        db.transaction(function (t) {
            t.executeSql("UPDATE groups set curator = ? where (number = ?)",
                [group._curator, number], success, error);
        });
    }
}

function success() {
    alert("Информация успешно добавлена!");
    document.getElementById("groupNumber").value="";
    document.getElementById("course").value="";
    document.getElementById("facultat").value="";
    document.getElementById("studentQuantity").value="";
    document.getElementById("email").value="";
    if (document.getElementById("newProperty") != null && document.getElementById("property") != null) {
        removeNewProperties();
    }
}

function error(transaction, error) {
    alert("Произошла ошибка: " + error.message);
}

function loadTable() {
    if (db) {
        db.transaction(function (t) {
            t.executeSql("SELECT rowid, number, course, facultat, quantity, email, phone, address, curator FROM groups",
                [], updateTable);
        })
    }
}

function updateTable(transaction, result) {
    let table = document.getElementById("groupTable");
    let select = document.getElementById("groupID");
    let properties = document.getElementById("groupProperties");
    properties.innerHTML = "<th>ID</th>\n" +
        "<th>Номер группы</th>\n" +
        "<th>Курс</th>\n" +
        "<th>Факультет</th>\n" +
        "<th>Кол-во учащихся</th>" +
        "<th>E-mail группы</th>";
    let phone = false;
    let address = false;
    let curator = false;
    let number = table.rows.length;
    for (let i = 1; i < number; i++) {
        select.remove(0);
        table.deleteRow(1);
    }
    let rows = result.rows;
    for (let i = 0; i < rows.length; i++) {
        let row = rows.item(i);
        if (row.phone != null && !phone) {
            phone = true;
        }
        if (row.address != null && !address) {
            address = true;
        }
        if (row.curator != null && !curator) {
            curator = true;
        }
    }
    if (phone) {
        properties.insertAdjacentHTML("beforeend", "<th>Телефон</th>");
    }
    if (address) {
        properties.insertAdjacentHTML("beforeend", "<th>Адрес</th>");
    }
    if (curator) {
        properties.insertAdjacentHTML("beforeend", "<th>Куратор</th>");
    }
    for (let i = 0; i < rows.length; i++) {
        let row = rows.item(i);
        let tr = table.insertRow(-1);
        let group_id = tr.insertCell(0);
        group_id.innerText = row.rowid;
        let group_number = tr.insertCell(1);
        group_number.innerText = row.number;
        let course = tr.insertCell(2);
        course.innerText = row.course;
        let facultat = tr.insertCell(3);
        facultat.innerText = row.facultat;
        let quantity = tr.insertCell(4);
        quantity.innerText = row.quantity;
        let email = tr.insertCell(5);
        email.innerText = row.email;
        if (phone) {
            let phone_value = tr.insertCell(6);
            phone_value.innerText = row.phone;
        }
        if (address) {
            let index = phone ? 7 : 6;
            let address_value = tr.insertCell(index);
            address_value.innerText = row.address;
        }
        if (curator) {
            let index = phone ? (address ? 8 : 7) : (address ? 7 : 6);
            let president_value = tr.insertCell(index);
            president_value.innerText = row.curator;
        }
        let option = document.createElement("option");
        option.value = row.rowid;
        option.innerText = row.rowid;
        select.appendChild(option);
    }
}

function deleteGroup() {
    let group_id = parseInt(document.getElementById("groupID").value, 10);
    if (db) {
        db.transaction(function (t) {
            t.executeSql("DELETE FROM groups WHERE rowid = ?",
                [group_id], updateTable);
        })
    }
}

function sortGroup() {
    if (db) {
        db.transaction(function (t) {
            t.executeSql("SELECT * FROM groups WHERE quantity<?",
                [20], alertNumber);
        })
    }
}

function alertNumber(transaction, result) {
    let rows = result.rows;
    let message = "Список групп, где меньше 20 учащихся\n";
    for (let i = 0; i < rows.length; i++) {
        let row = rows.item(i);
        message += row.number;
        message += " -> ";
        message += row.quantity;
        message += " учащихся";
        message += "\n";
    }
    alert(message);
}

function addNewProperties() {
    let div = document.getElementById("mainInfo");
    div.insertAdjacentHTML("beforeend", "<select id=\"newProperty\" name=\"newProperty\"><option value=\"phone\">Телефон старосты</option><option value=\"address\">Адрес деканата</option><option value=\"curator\">Куратор</option></select>");
    div.insertAdjacentHTML("beforeend", "<input type=\"text\" placeholder=\"Значение\" id=\"property\" name=\"property\" required>");
    div.insertAdjacentHTML("beforeend", "<button class=\"red\" type=\"button\" id=\"removeAddInfo\" onclick=\"removeNewProperties()\">Удалить поле</button>");
    let button = document.getElementById("addInfo");
    div.removeChild(button);
}

function removeNewProperties() {
    let div = document.getElementById("mainInfo");
    div.insertAdjacentHTML("beforeend", "<button class=\"orange\" type=\"button\" id=\"addInfo\" onclick=\"addNewProperties()\">Другая информация</button>");
    let key = document.getElementById("newProperty");
    let value = document.getElementById("property");
    let removeButton = document.getElementById("removeAddInfo");
    div.removeChild(key);
    div.removeChild(value);
    div.removeChild(removeButton);
}