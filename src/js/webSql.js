var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS5 (id unique, log)');
});

db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS5', [], function (tx, results) {
        let len = results.rows.length, i;

        // вытянули результат с бд
        for (i = 0; i < len; i++) {
            let getText = results.rows.item(i).log;
            let li = document.createElement('li');
            let text = document.createTextNode(getText);
            let ul = document.getElementById('tasks');
            li.appendChild(text);
            ul.appendChild(li);
            let btn = document.createElement('BUTTON');
            let t = document.createTextNode('\u00D7');
            btn.appendChild(t);
            li.appendChild(btn);
            btn.className = 'shutBtn';
        }
    }, null);
});